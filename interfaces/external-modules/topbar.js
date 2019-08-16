declare module "topbar" {
  declare module.exports: {
    show: () => void,
    hide: () => void,
    config: (?Object) => void
  };
}
