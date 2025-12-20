export function reveal(node: HTMLElement, { 
    duration = 1000, 
    delay = 0, 
    distance = "0px",
    direction = "bottom", 
    scale = 0.8
} = {}) {
    const directions = {
        bottom: `translateY(${distance})`,
        top: `translateY(-${distance})`,
        left: `translateX(-${distance})`,
        right: `translateX(${distance})`,
        none: `translate(0,0)`
    };

    node.style.opacity = "0";
    node.style.transition = `all ${duration}ms ease-out ${delay}ms`;
    node.style.transform = `${directions[direction as keyof typeof directions]} scale(${scale})`;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    node.style.opacity = "1";
                    node.style.transform = "translate(0, 0) scale(1)";
                    observer.unobserve(node);
                }
            });
        },
        { threshold: 0.1 }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        },
    };
}