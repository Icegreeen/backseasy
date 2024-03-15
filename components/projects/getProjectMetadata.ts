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
    };
  });

  return whiteProjects;
};

const getProjectMetadata = (): ProjectMetadata[] => {
  const butterflyProjects = getButterflyProjects();
  const blackProjects = getBlackProjects();
  const squareProjects = getSquareProjects();
  const skyProjects = getSkyProjects();
  const whiteProjects = getWhiteProjects();

  const allProjects = [...butterflyProjects, ...blackProjects, ... squareProjects, ...skyProjects, ...whiteProjects];

  return allProjects;
};

export default getProjectMetadata;
