import fs from "fs";
import matter from "gray-matter";
import { ProjectMetadata } from "./ProjectMetadata";

const getButterflyProjects = (): ProjectMetadata[] => {
  const butterflyFolder = "projects/butterfly/";
  const butterflyFiles = fs.readdirSync(butterflyFolder).filter((file) => file.endsWith(".md"));

  const butterflyProjects = butterflyFiles.map((filename) => {
    const fileContents = fs.readFileSync(`${butterflyFolder}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      image: matterResult.data.image,
      type: matterResult.data.type,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
      author: matterResult.data.author || "Backseasy",
    };
  });

  return butterflyProjects;
};

const getBlackProjects = (): ProjectMetadata[] => {
  const blackFolder = "projects/black/";
  const blackFiles = fs.readdirSync(blackFolder).filter((file) => file.endsWith(".md"));

  const blackProjects = blackFiles.map((filename) => {
    const fileContents = fs.readFileSync(`${blackFolder}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      image: matterResult.data.image,
      type: matterResult.data.type,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
      author: matterResult.data.author || "Backseasy",
    };
  });

  return blackProjects;
};

const getSquareProjects = (): ProjectMetadata[] => {
  const squareFolder = "projects/square/";
  const squareFiles = fs.readdirSync(squareFolder).filter((file) => file.endsWith(".md"));

  const squareProjects = squareFiles.map((filename) => {
    const fileContents = fs.readFileSync(`${squareFolder}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      image: matterResult.data.image,
      type: matterResult.data.type,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
      author: matterResult.data.author || "Backseasy",
    };
  });

  return squareProjects;
};

const getSkyProjects = (): ProjectMetadata[] => {
  const skyFolder = "projects/sky/";
  const skyFiles = fs.readdirSync(skyFolder).filter((file) => file.endsWith(".md"));

  const skyProjects = skyFiles.map((filename) => {
    const fileContents = fs.readFileSync(`${skyFolder}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      image: matterResult.data.image,
      type: matterResult.data.type,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
      author: matterResult.data.author || "Backseasy",
    };
  });

  return skyProjects;
};

const getWhiteProjects = (): ProjectMetadata[] => {
  const whiteFolder = "projects/white/";
  const whiteFiles = fs.readdirSync(whiteFolder).filter((file) => file.endsWith(".md"));

  const whiteProjects = whiteFiles.map((filename) => {
    const fileContents = fs.readFileSync(`${whiteFolder}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      image: matterResult.data.image,
      type: matterResult.data.type,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
      author: matterResult.data.author || "Backseasy",
    };
  });

  return whiteProjects;
};

const getAnimatedProjects = (): ProjectMetadata[] => {
  const animatedFolder = "projects/animated/";
  const animatedFiles = fs.readdirSync(animatedFolder).filter((file) => file.endsWith(".md"));

  const animatedProjects = animatedFiles.map((filename) => {
    const fileContents = fs.readFileSync(`${animatedFolder}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      image: matterResult.data.image,
      type: matterResult.data.type,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
      author: matterResult.data.author || "Backseasy",
    };
  });

  return animatedProjects;
};

const getSvgProjects = (): ProjectMetadata[] => {
  const svgFolder = "projects/svg/";
  const svgFiles = fs.readdirSync(svgFolder).filter((file) => file.endsWith(".md"));

  const svgProjects = svgFiles.map((filename) => {
    const fileContents = fs.readFileSync(`${svgFolder}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      image: matterResult.data.image,
      type: matterResult.data.type,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
      author: matterResult.data.author || "Backseasy",
    };
  });

  return svgProjects;
};

const getObjectsProjects = (): ProjectMetadata[] => {
  const objectsFolder = "projects/objects/";
  const objectsFiles = fs.readdirSync(objectsFolder).filter((file) => file.endsWith(".md"));

  const objectsProjects = objectsFiles.map((filename) => {
    const fileContents = fs.readFileSync(`${objectsFolder}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      image: matterResult.data.image,
      type: matterResult.data.type,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
      author: matterResult.data.author || "Backseasy",
    };
  });

  return objectsProjects;
};

const getAtmosphereProjects = (): ProjectMetadata[] => {
  const atmosphereFolder = "projects/atmosphere/";
  const atmosphereFiles = fs.readdirSync(atmosphereFolder).filter((file) => file.endsWith(".md"));

  const atmosphereProjects = atmosphereFiles.map((filename) => {
    const fileContents = fs.readFileSync(`${atmosphereFolder}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      image: matterResult.data.image,
      type: matterResult.data.type,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
      author: matterResult.data.author || "Backseasy",
    };
  });
  
  return atmosphereProjects;
};

const getNewProjects = (): ProjectMetadata[] => {
  const newFolder = "projects/new/";
  const newFiles = fs.readdirSync(newFolder).filter((file) => file.endsWith(".md"));
  return newFiles.map((filename) => {
    const fileContents = fs.readFileSync(`${newFolder}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      image: matterResult.data.image,
      type: matterResult.data.type,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
      author: matterResult.data.author || "Backseasy",
    };
  });
};
const getProjectMetadata = (): ProjectMetadata[] => {
  const newProjects = getNewProjects();
  const butterflyProjects = getButterflyProjects();
  const blackProjects = getBlackProjects();
  const squareProjects = getSquareProjects();
  const skyProjects = getSkyProjects();
  const whiteProjects = getWhiteProjects();
  const animatedProjects = getAnimatedProjects();
  const svgProjects = getSvgProjects();
  const objectsProjects = getObjectsProjects();
  const atmosphereProjects = getAtmosphereProjects();

  const allProjects = [...butterflyProjects, ...blackProjects, ... squareProjects, ...skyProjects, ...whiteProjects, ...animatedProjects, ...svgProjects, ...atmosphereProjects, ...objectsProjects, ...newProjects];

  return allProjects;
};

export default getProjectMetadata;
