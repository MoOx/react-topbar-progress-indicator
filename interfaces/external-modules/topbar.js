type topbar = {
  show: Function,
  hide: Function,
}

declare module "topbar" {
  declare var exports: topbar
}
