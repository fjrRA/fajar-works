// src/lib/navigation/is-navigation-item-active.ts
export function isNavigationItemActive(
  pathname: string,
  href: string,
) {
  return (
    pathname === href ||
    pathname.startsWith(`${href}/`)
  );
}