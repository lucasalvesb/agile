import { AnimalModule, faker } from '@faker-js/faker';
import { AnimalData } from '../types';

const getImage = (): string => faker.image.animals(644, 362, true);
const getType = (): string => faker.animal.type();
const getUrl = (): string => faker.internet.url();
const getText = (): string => faker.lorem.sentences();
const getTitle = (type: string): string => faker.animal[type as keyof AnimalModule]();

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const generateAnimalData = async (): Promise<AnimalData[]> => {
  await delay(1000); 
  
  const animalDataPromises = [...new Array(100)].map(async (_, index) => {
    const type = getType();
    return {
      type,
      id: index + 1,
      url: getUrl(),
      title: getTitle(type),
      description: getText(),
      image: getImage(),
    };
  });

  return await Promise.all(animalDataPromises);
};

export const animals = {
  async get(): Promise<AnimalData[]> {
    return await generateAnimalData();
  },
};