export const absurd = <A>(x: unknown): A => x as A

export const identity = <A>(a: A): A => a

export const noop = (): void => undefined
