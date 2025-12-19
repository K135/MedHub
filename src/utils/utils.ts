export const animationCreate = () => {
  if (typeof window !== "undefined") {
    import("wowjs").then((module) => {
      const WOW = module.default;
      // @ts-ignore
      const wow = new WOW.WOW ? new WOW.WOW({live: false}) : new WOW({live: false});
      wow.init();
    });
  }
};
