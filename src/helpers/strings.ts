export function listOfNames(names: string[]) {
  return [names.slice(0, -1).join(', '), names.slice(-1)[0]].join(
    names.length < 2 ? '' : ' and '
  );
}
