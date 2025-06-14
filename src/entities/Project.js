
// Mock Project data
export const Project = {
  async filter(filter, sort, limit) {
    return [
      { id: 1, title: "Feature 1", category: "Main Space", image_url: "https://picsum.photos/600/400?1", materials: ["Wood", "Metal"] },
      { id: 2, title: "Feature 2", category: "Lighting", image_url: "https://picsum.photos/600/400?2", materials: ["Brass", "Glass"] },
      { id: 3, title: "Feature 3", category: "Furniture", image_url: "https://picsum.photos/600/400?3", materials: ["Leather", "Fabric"] },
    ].slice(0, limit);
  },
  async list(sort) {
    return [
      { id: 1, title: "Feature 1", category: "Main Space", image_url: "https://picsum.photos/600/400?1", materials: ["Wood", "Metal"] },
      { id: 2, title: "Feature 2", category: "Lighting", image_url: "https://picsum.photos/600/400?2", materials: ["Brass", "Glass"] },
      { id: 3, title: "Feature 3", category: "Furniture", image_url: "https://picsum.photos/600/400?3", materials: ["Leather", "Fabric"] },
    ];
  }
};
