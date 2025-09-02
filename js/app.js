// 主应用程序
class GalleryApp {
  constructor() {
    this.init();
  }
  
  init() {
    this.setupEventListeners();
    this.renderGallery();
  }
  
  // 设置事件监听器
  setupEventListeners() {
    // 图片卡片点击事件
    document.addEventListener('click', (e) => {
      const card = e.target.closest('.masonry-item');
      if (card) {
        const imageId = card.dataset.imageId;
        this.openDetailPage(imageId);
      }
    });
    
    // 键盘导航
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen();
      }
    });
  }
  
  // 渲染画廊
  renderGallery() {
    const galleryContainer = document.querySelector('.masonry-grid');
    if (!galleryContainer) return;
    
    const images = galleryData.getAllImages();
    const cardsHTML = images.map(image => Templates.generateImageCard(image)).join('');
    
    galleryContainer.innerHTML = cardsHTML;
  }
  
  // 打开详情页
  openDetailPage(imageId) {
    window.location.href = `pages/detail.html?id=${imageId}`;
  }
  
  // 处理详情页路由
  static handleDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const imageId = urlParams.get('id');
    
    if (!imageId) {
      window.location.href = '../index.html';
      return;
    }
    
    const image = galleryData.getImageById(imageId);
    if (!image) {
      window.location.href = '../index.html';
      return;
    }
    
    const adjacentImages = galleryData.getAdjacentImages(imageId);
    const detailHTML = Templates.generateDetailPage(image, adjacentImages);
    
    document.write(detailHTML);
    document.close();
  }
  
  // 添加上传功能
  static handleUploadPage() {
    // 初始化上传表单事件
    const uploadForm = document.getElementById('uploadForm');
    const fileInput = document.getElementById('fileInput');
    const previewContainer = document.getElementById('previewContainer');
    
    if (uploadForm && fileInput) {
      fileInput.addEventListener('change', function(e) {
        const files = e.target.files;
        if (files.length > 0) {
          Templates.handleFileUpload(files[0]);
        }
      });
      
      uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('上传功能已触发，但需要后端支持');
      });
    }
  }
}

// 根据当前页面初始化应用
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
  document.addEventListener('DOMContentLoaded', () => {
    new GalleryApp();
  });
} else if (window.location.pathname.endsWith('detail.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    GalleryApp.handleDetailPage();
  });
} else if (window.location.pathname.endsWith('update.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    GalleryApp.handleUploadPage();
  });
}