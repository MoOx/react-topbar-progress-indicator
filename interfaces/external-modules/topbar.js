type Topbar = {
  show: Function,
  hide: Function,
  config: Function,
}

declare module "topbar" {
  declare var exports: Topbar
}
