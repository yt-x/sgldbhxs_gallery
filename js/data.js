// 图片数据存储
const galleryData = {
  images: [
    {
      id: 1,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGzmod9h4OTCsMXGYsWybgR8ZPmZosslFpr3dwh26lX63l5yA6IRx3AB3kMhug-1E4ipgx9trv2AKx8OSakWgpzywXZiAPs563D7zTBWth8t3PbiLCliPVemsgWCBs52cumXE38-aG1uItn1ylyvKtQYtNEk1k8wxFWID3X8lN0G2JwaM3Ks-zJ5Zv6DiQ7SeV6FcI3-rxxT6ERWNC13kSSt4gzY2q-JQfzwywkTP_Rk9g5ZsUG-Vx8mHg9yU_u2T91-YiaX4q6Bwq",
      title: "抽象构图",
      size: "2.5MB",
      format: "JPEG",
      dimensions: "4032x3024",
      camera: "Canon EOS R5",
      exposure: "f/8",
      focalLength: "50mm",
      shutterSpeed: "1/250s",
      tags: ["抽象", "现代", "色彩", "画廊", "艺术"],
      description: "这幅充满活力的抽象画捕捉了现代艺术的精髓。大胆的色彩和动态的构图创造出一件视觉上令人惊叹的作品，引人深思和诠释。"
    },
    {
      id: 2,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo1PvEbEL9IVUL0VI40QsbeDP259a_zYnurP305acNQTaz5j7CABhDaMDhD7w4HptXzfmfya0Nk-Tre_DnZqS4Nmry6aFLrJd6xd41heketO6KnRg5l45od2quT1RGbCPO9yDbXFd0GhXnOBYawouCEryzvdILAUA4GB-2J6LuJ5xs8o9GqWIhSWjUclCy-tHNJ3Tffx0QlRwCJOTYuDrCo6ctuITM1y0FHf0G_BR7N0rzaKoDYvW18sVyYYDS5_v92Zo2rmbAB9Mq",
      title: "城市景观",
      size: "3.1MB",
      format: "JPEG",
      dimensions: "6000x4000",
      camera: "Sony A7 III",
      exposure: "f/5.6",
      focalLength: "35mm",
      shutterSpeed: "1/125s",
      tags: ["城市", "建筑", "现代", "景观", "摄影"],
      description: "城市天际线的壮丽景色，展现了现代建筑的几何美感和光影效果。"
    },
    {
      id: 3,
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD54_02LxgbTrKs6k82nl_TBjNFfIVXbNIrV9yM437kLyo04lZN8PchhTspRxT-2rngyStNz78uMsFLrmbWBBy7S9qOtJBuIkOXetQTpNzfxkK61XTthO2O1cnoTSNzTq35oOgTee2COGItmQwkFtn2SBc6JhkqsbZfz4ShRTUscCuoDzg5_tSlHkdg5yEGUL2JIWZ7bfdOiXs3tet-rE7RxV3lm2OEWamqOFrEYq4N53Y9zdHpTASatIfC3PTn0_0uVg5ajuX7jP7p",
      title: "自然风光",
      size: "4.2MB",
      format: "JPEG",
      dimensions: "5184x3456",
      camera: "Nikon D850",
      exposure: "f/11",
      focalLength: "24mm",
      shutterSpeed: "1/60s",
      tags: ["自然", "风景", "山脉", "湖泊", "户外"],
      description: "壮丽的自然风光，山脉与湖泊的完美结合，展现了大自然的宁静与壮美。"
    }
  ],
  
  // 获取所有图片
  getAllImages: function() {
    return this.images;
  },
  
  // 根据ID获取图片
  getImageById: function(id) {
    return this.images.find(img => img.id === parseInt(id));
  },
  
  // 添加新图片
  addImage: function(imageData) {
    const newId = Math.max(...this.images.map(img => img.id), 0) + 1;
    const newImage = {
      id: newId,
      ...imageData
    };
    this.images.push(newImage);
    return newImage;
  },
  
  // 获取相邻图片
  getAdjacentImages: function(currentId) {
    const index = this.images.findIndex(img => img.id === parseInt(currentId));
    return {
      previous: index > 0 ? this.images[index - 1] : null,
      next: index < this.images.length - 1 ? this.images[index + 1] : null
    };
  }
};