export const getChangeStatus = (
  prev: number | undefined,
  next: number | undefined,
): boolean | undefined => {
  if (prev && next) {
    return prev < next;
  }

  return undefined;
};
