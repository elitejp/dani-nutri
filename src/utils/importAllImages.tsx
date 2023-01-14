interface IImages {
  image: string;
  name: string;
}

function importAllimages(requireImages: any): IImages[] {
  const paths = requireImages.keys();
  const names = paths.map((path: string) =>
    path.split(".")[1].replace("/", "")
  );

  const images = requireImages.keys().map(requireImages);

  return names.map((name: string, index: number) => {
    return { name: name, image: images[index] };
  });
}

export default importAllimages;
