import { generateAnimalData } from '../../api/animals';

describe('generateAnimalData', () => {
  it('should generate animal data', async () => {
    const animalData = await generateAnimalData();
    expect(Array.isArray(animalData)).toBe(true);
    expect(animalData.length).toBe(100); 

    animalData.forEach(animal => {
      expect(animal).toHaveProperty('type');
      expect(animal).toHaveProperty('id');
      expect(animal).toHaveProperty('url');
      expect(animal).toHaveProperty('title');
      expect(animal).toHaveProperty('description');
      expect(animal).toHaveProperty('image');
    });
  });

  it('should delay for 2000 milliseconds before resolving', async () => {
    const start = Date.now();
    await generateAnimalData();
    const end = Date.now();
    const duration = end - start;
    expect(duration).toBeGreaterThanOrEqual(2000);
  });
});