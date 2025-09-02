// 模板系统
const Templates = {
  // 生成图片卡片HTML
  generateImageCard: function(image) {
    return `
      <div class="masonry-item overflow-hidden rounded-lg cursor-pointer" data-image-id="${image.id}">
        <img alt="${image.title}" 
             class="w-full h-auto block transform hover:scale-110 transition-transform duration-300 ease-in-out" 
             src="${image.src}" 
             loading="lazy">
      </div>
    `;
  },
  
  // 生成详情页HTML
  generateDetailPage: function(image, adjacentImages) {
    return `
      <!DOCTYPE html>
      <html lang="zh-CN">
      <head>
        <meta charset="utf-8"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <title>${image.title} - Art Gallery</title>
        <link href="data:image/x-icon;base64," rel="icon" type="image/x-icon"/>
        <link href="https://fonts.googleapis.com" rel="preconnect"/>
        <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
        <link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <style>
          body {
            font-family: 'Spline Sans', sans-serif;
          }
        </style>
      </head>
      <body class="bg-gray-900 text-white">
        <div class="flex h-screen">
          <main class="flex-1 flex items-center justify-center p-8 relative">
            <div class="absolute top-8 left-8 flex items-center gap-6">
              <a href="../index.html" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <svg class="h-8 w-8 text-[#38e07b]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fill-rule="evenodd"></path>
                </svg>
                <h1 class="text-2xl font-bold">Art Gallery</h1>
              </a>
              <a href="update.html" class="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">Upload</a>
            </div>
            
            <div class="relative w-full max-w-5xl aspect-[16/9]">
              <img alt="${image.title}" 
                   class="w-full h-full object-cover rounded-lg" 
                   src="${image.src}">
              
              ${adjacentImages.previous ? `
                <button class="absolute top-1/2 left-4 -translate-y-1/2 flex shrink-0 items-center justify-center rounded-full size-12 bg-black/50 hover:bg-black/75 transition-colors text-white"
                        onclick="window.location.href='../pages/detail.html?id=${adjacentImages.previous.id}'">
                  <span class="material-symbols-outlined">arrow_back_ios_new</span>
                </button>
              ` : ''}
              
              ${adjacentImages.next ? `
                <button class="absolute top-1/2 right-4 -translate-y-1/2 flex shrink-0 items-center justify-center rounded-full size-12 bg-black/50 hover:bg-black/75 transition-colors text-white"
                        onclick="window.location.href='../pages/detail.html?id=${adjacentImages.next.id}'">
                  <span class="material-symbols-outlined">arrow_forward_ios</span>
                </button>
              ` : ''}
            </div>
          </main>
          
          <aside class="w-[380px] bg-gray-950/50 border-l border-gray-800 p-8 flex flex-col gap-8 overflow-y-auto">
            <div>
              <h2 class="text-2xl font-bold leading-tight tracking-[-0.015em] mb-4">图片信息</h2>
              <div class="space-y-4 text-sm">
                <div class="flex justify-between items-center border-b border-gray-800 pb-3">
                  <p class="text-gray-400">图片大小</p>
                  <p class="font-medium">${image.size}</p>
                </div>
                <div class="flex justify-between items-center border-b border-gray-800 pb-3">
                  <p class="text-gray-400">格式</p>
                  <p class="font-medium">${image.format}</p>
                </div>
                <div class="flex justify-between items-center border-b border-gray-800 pb-3">
                  <p class="text-gray-400">尺寸</p>
                  <p class="font-medium">${image.dimensions}</p>
                </div>
                <div class="flex justify-between items-center border-b border-gray-800 pb-3">
                  <p class="text-gray-400">相机</p>
                  <p class="font-medium">${image.camera}</p>
                </div>
                <div class="flex justify-between items-center border-b border-gray-800 pb-3">
                  <p class="text-gray-400">曝光</p>
                  <p class="font-medium">${image.exposure}</p>
                </div>
                <div class="flex justify-between items-center border-b border-gray-800 pb-3">
                  <p class="text-gray-400">焦距</p>
                  <p class="font-medium">${image.focalLength}</p>
                </div>
                <div class="flex justify-between items-center pb-3">
                  <p class="text-gray-400">快门速度</p>
                  <p class="font-medium">${image.shutterSpeed}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 class="text-2xl font-bold leading-tight tracking-[-0.015em] mb-4">标签</h2>
              <div class="flex gap-2 flex-wrap">
                ${image.tags.map(tag => `
                  <div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-800 px-4">
                    <p class="text-sm font-medium">${tag}</p>
                  </div>
                `).join('')}
              </div>
            </div>
            
            <div>
              <h2 class="text-2xl font-bold leading-tight tracking-[-0.015em] mb-4">说明</h2>
              <p class="text-gray-300 text-sm leading-relaxed">
                ${image.description}
              </p>
            </div>
            
            <div class="mt-auto">
              <h3 class="text-lg font-bold mb-3">键盘快捷键</h3>
              <div class="space-y-2 text-sm text-gray-400">
                <p><kbd class="font-sans inline-block bg-gray-800 rounded px-2 py-1 mr-2">←</kbd> 上一张图片</p>
                <p><kbd class="font-sans inline-block bg-gray-800 rounded px-2 py-1 mr-2">→</kbd> 下一张图片</p>
                <p><kbd class="font-sans inline-block bg-gray-800 rounded px-2 py-1 mr-2">F</kbd> 切换全屏</p>
                <p><kbd class="font-sans inline-block bg-gray-800 rounded px-2 py-1 mr-2">Esc</kbd> 退出全屏</p>
              </div>
            </div>
          </aside>
        </div>
        
        <script>
          // 键盘快捷键
          document.addEventListener('keydown', function(e) {
            ${adjacentImages.previous ? `if (e.key === 'ArrowLeft') window.location.href = '../pages/detail.html?id=${adjacentImages.previous.id}';` : ''}
            ${adjacentImages.next ? `if (e.key === 'ArrowRight') window.location.href = '../pages/detail.html?id=${adjacentImages.next.id}';` : ''}
            if (e.key === 'f' || e.key === 'F') {
              const elem = document.documentElement;
              if (elem.requestFullscreen) {
                elem.requestFullscreen();
              }
            }
            if (e.key === 'Escape') {
              if (document.fullscreenElement) {
                document.exitFullscreen();
              }
            }
          });
        </script>
      </body>
      </html>
    `;
  },
  
  // 处理文件上传预览
  handleFileUpload: function(file) {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const previewContainer = document.getElementById('previewContainer');
        if (previewContainer) {
          previewContainer.innerHTML = `
            <div class="bg-[var(--surface-color)] rounded-lg p-6 flex flex-col md:flex-row gap-6">
              <div class="relative group aspect-square w-full md:w-48 flex-shrink-0">
                <img src="${e.target.result}" class="w-full h-full object-cover rounded-md" alt="预览图片">
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-md">
                  <button class="text-white" onclick="this.closest('.bg-\\[var\\(--surface-color\\)\\]').remove()">
                    <span class="material-symbols-outlined text-3xl">close</span>
                  </button>
                </div>
              </div>
              <div class="w-full">
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm mb-4">
                  <div class="text-[var(--subtle-text-color)]">文件名: <span class="text-[var(--text-color)]">${file.name}</span></div>
                  <div class="text-[var(--subtle-text-color)]">大小: <span class="text-[var(--text-color)]">${(file.size / 1024 / 1024).toFixed(2)}MB</span></div>
                  <div class="text-[var(--subtle-text-color)]">类型: <span class="text-[var(--text-color)]">${file.type}</span></div>
                </div>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium mb-1" for="tags">标签</label>
                    <input class="form-input" id="tags" name="tags" placeholder="例如: 自然, 肖像, 抽象" type="text"/>
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1" for="description">描述</label>
                    <textarea class="form-textarea" id="description" name="description" placeholder="图片的简要描述" rows="2"></textarea>
                  </div>
                </div>
              </div>
            </div>
          `;
        }
      };
      reader.readAsDataURL(file);
    } else {
      alert('请选择图片文件');
    }
  }
};