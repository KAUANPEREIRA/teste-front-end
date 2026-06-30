import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Brand {
  id: string | number;
  name: string;
  logo: string;
}

export interface BrandCarouselProps {
  /** Lista de marcas a exibir. */
  brands?: Brand[];
  /** Ativa rotação automática. */
  autoPlay?: boolean;
  /** Intervalo do autoplay em ms. */
  autoPlayInterval?: number;
  /** Título exibido acima do carrossel. */
  title?: string;
}

const LOGO_SRC = "/logo.webp";

const DEFAULT_BRANDS: Brand[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  name: "Econverse",
  logo: LOGO_SRC,
}));

const THEME = {
  title: "#3442B5",
  icon: "#3442B5",
  arrowShadow: "0 6px 16px -4px rgba(52,66,181,0.25)",
  cardShadow:
    "0 12px 28px -8px rgba(52,66,181,0.18), 0 4px 10px -4px rgba(0,0,0,0.06)",
  dotInactive: "#D8DAEF",
} as const;

const GAP_PX = 24; // equivalente ao gap-6 do Tailwind
const CLONE_COUNT = 6; // cobre o maior breakpoint sem ficar sem clones nas pontas
const DRAG_THRESHOLD_RATIO = 0.25; // % da largura do card para disparar troca de slide
const TRANSITION = "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)";

/** Módulo sempre positivo (evita índices negativos no wrap do loop). */
function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

interface DragState {
  dragging: boolean;
  startX: number;
}

export default function BrandCarousel({
  brands = DEFAULT_BRANDS,
  autoPlay = true,
  autoPlayInterval = 2800,
  title = "Navegue por marcas",
}: BrandCarouselProps) {
  const realCount = brands.length;

  const extendedBrands: Brand[] = [
    ...brands.slice(-CLONE_COUNT),
    ...brands,
    ...brands.slice(0, CLONE_COUNT),
  ];

  const [index, setIndex] = useState<number>(CLONE_COUNT);
  const [withTransition, setWithTransition] = useState<boolean>(true);
  const [cardStep, setCardStep] = useState<number>(0);
  const [dragOffset, setDragOffset] = useState<number>(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef<boolean>(false);
  const dragRef = useRef<DragState>({ dragging: false, startX: 0 });

  // Mede a largura real do card (cartão + gap) para o transform ser exato
  // em qualquer breakpoint, sem hardcodar pixels.
  useEffect(() => {
    const measure = () => {
      if (!cardRef.current) return;
      setCardStep(cardRef.current.getBoundingClientRect().width + GAP_PX);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const next = useCallback(() => {
    setWithTransition(true);
    setIndex((i) => i + 1);
  }, []);

  const prev = useCallback(() => {
    setWithTransition(true);
    setIndex((i) => i - 1);
  }, []);

  const goToReal = useCallback((realIdx: number) => {
    setWithTransition(true);
    setIndex(CLONE_COUNT + realIdx);
  }, []);

  // Ao entrar na zona de clones, reseta o índice instantaneamente (sem
  // transição) para a posição real equivalente.
  const handleTransitionEnd = useCallback(() => {
    if (index >= realCount + CLONE_COUNT) {
      setWithTransition(false);
      setIndex(index - realCount);
    } else if (index < CLONE_COUNT) {
      setWithTransition(false);
      setIndex(index + realCount);
    }
  }, [index, realCount]);

  // Reativa a transição no frame seguinte ao reset instantâneo, para que o
  // próximo movimento do usuário volte a ser animado.
  useEffect(() => {
    if (withTransition) return;
    const raf = requestAnimationFrame(() => setWithTransition(true));
    return () => cancelAnimationFrame(raf);
  }, [withTransition]);

  // Autoplay — pausado durante hover, foco ou arraste.
  useEffect(() => {
    if (!autoPlay || cardStep === 0) return;
    const id = window.setInterval(() => {
      if (!isPausedRef.current) next();
    }, autoPlayInterval);
    return () => window.clearInterval(id);
  }, [autoPlay, autoPlayInterval, cardStep, next]);

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragRef.current = { dragging: true, startX: e.clientX };
    isPausedRef.current = true;
    setWithTransition(false);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.dragging) return;
    setDragOffset(e.clientX - dragRef.current.startX);
  };

  const endDrag = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.dragging) return;
    const delta = e.clientX - dragRef.current.startX;

    dragRef.current.dragging = false;
    isPausedRef.current = false;
    setDragOffset(0);
    setWithTransition(true);

    const threshold = cardStep * DRAG_THRESHOLD_RATIO;
    if (delta < -threshold) next();
    else if (delta > threshold) prev();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  const realIndex = mod(index - CLONE_COUNT, realCount);
  const translateX = -(index * cardStep) + dragOffset;

  return (
    <section className="w-full bg-white py-10">
      <h2
        className="text-center !font-bold text-xl md:text-2xl mb-8 tracking-tight"
        style={{ color: THEME.title }}
      >
        {title}
      </h2>

      <div
        className="relative max-w-6xl mx-auto px-4 md:px-12 group"
        onMouseEnter={() => (isPausedRef.current = true)}
        onMouseLeave={() => (isPausedRef.current = false)}
      >
        <CarouselArrow direction="left" onClick={prev} />
        <CarouselArrow direction="right" onClick={next} />

        <div
          className="overflow-hidden"
          role="region"
          aria-roledescription="carrossel"
          aria-label={title}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div
            ref={trackRef}
            className="flex items-center gap-6 select-none touch-pan-y"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: withTransition ? TRANSITION : "none",
              cursor: "grab",
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onPointerCancel={endDrag}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedBrands.map((brand, i) => {
              const isReal = i >= CLONE_COUNT && i < CLONE_COUNT + realCount;
              return (
                <BrandCard
                  key={`${brand.id}-${i}`}
                  ref={i === CLONE_COUNT ? cardRef : undefined}
                  brand={brand}
                  isReal={isReal}
                />
              );
            })}
          </div>
        </div>

        <CarouselDots
          brands={brands}
          activeIndex={realIndex}
          onSelect={goToReal}
        />
      </div>
    </section>
  );
}

interface CarouselArrowProps {
  direction: "left" | "right";
  onClick: () => void;
}

function CarouselArrow({ direction, onClick }: CarouselArrowProps) {
  const isLeft = direction === "left";
  return (
    <button
      type="button"
      aria-label={isLeft ? "Marca anterior" : "Próxima marca"}
      onClick={onClick}
      className={`absolute ${isLeft ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 z-10
        flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md
        opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200
        cursor-pointer`}
      style={{ boxShadow: THEME.arrowShadow }}
    >
      {isLeft ? (
        <ChevronLeft size={20} color={THEME.icon} />
      ) : (
        <ChevronRight size={20} color={THEME.icon} />
      )}
    </button>
  );
}

interface BrandCardProps {
  brand: Brand;
  isReal: boolean;
}

const BrandCard = forwardRef<HTMLDivElement, BrandCardProps>(function BrandCard(
  { brand, isReal },
  ref,
) {
  return (
    <div
      ref={ref}
      className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36
          rounded-full bg-white flex items-center justify-center"
      style={{ boxShadow: THEME.cardShadow }}
      aria-hidden={!isReal}
    >
      <img
        src={brand.logo}
        alt={isReal ? brand.name : ""}
        draggable={false}
        className="w-[60%] object-contain pointer-events-none"
      />
    </div>
  );
});

interface CarouselDotsProps {
  brands: Brand[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

function CarouselDots({ brands, activeIndex, onSelect }: CarouselDotsProps) {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {brands.map((brand, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={brand.id}
            type="button"
            aria-label={`Ir para ${brand.name}, item ${i + 1}`}
            aria-current={isActive}
            onClick={() => onSelect(i)}
            className="rounded-full transition-all duration-200"
            style={{
              width: isActive ? 18 : 6,
              height: 6,
              backgroundColor: isActive ? THEME.title : THEME.dotInactive,
            }}
          />
        );
      })}
    </div>
  );
}
