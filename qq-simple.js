/**
 * 极简版QQ客服 - 右下角悬浮图标
 * 点击直接跳转QQ群/客服链接
 */
(function() {
    'use strict';

    // 配置
    const config = {
        url: 'https://qm.qq.com/q/Q4YTVK5T6q',  // QQ群/客服链接
        position: {
            bottom: '30px',
            right: '30px'
        }
    };

    // 创建样式
    const style = document.createElement('style');
    style.textContent = `
        .qq-float-icon {
            position: fixed;
            bottom: ${config.position.bottom};
            right: ${config.position.right};
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #52c41a 0%, #3ea617 100%);
            border-radius: 50%;
            box-shadow: 0 4px 20px rgba(82, 196, 26, 0.4);
            cursor: pointer;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            animation: fadeInUp 0.5s ease;
        }

        .qq-float-icon:hover {
            transform: translateY(-5px) scale(1.1);
            box-shadow: 0 6px 30px rgba(82, 196, 26, 0.6);
        }

        .qq-float-icon:active {
            transform: translateY(-2px) scale(1.05);
        }

        .qq-float-icon svg {
            width: 36px;
            height: 36px;
        }

        /* 呼吸灯效果 */
        @keyframes pulse {
            0%, 100% {
                box-shadow: 0 4px 20px rgba(82, 196, 26, 0.4);
            }
            50% {
                box-shadow: 0 4px 30px rgba(82, 196, 26, 0.8);
            }
        }

        .qq-float-icon.pulse {
            animation: pulse 2s ease infinite;
        }

        /* 入场动画 */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* 响应式 - 移动端 */
        @media (max-width: 768px) {
            .qq-float-icon {
                width: 50px;
                height: 50px;
                bottom: 20px;
                right: 20px;
            }
            .qq-float-icon svg {
                width: 30px;
                height: 30px;
            }
        }
    `;
    document.head.appendChild(style);

    // 创建图标元素
    const icon = document.createElement('a');
    icon.href = config.url;
    icon.target = '_blank';
    icon.className = 'qq-float-icon pulse';
    icon.title = '联系客服';

    // QQ图标SVG
    icon.innerHTML = `
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M511.09 63.33c-222.8 0-403.84 144.3-403.84 321.52 0 99.25 48.2 188.09 124.34 248.91-8.3 72.73-35.2 138.03-35.2 138.03s91.82-22.43 154.66-76.54c38.54 11.07 79.6 17.07 121.92 17.07 222.78 0 403.82-144.3 403.82-321.53S733.87 63.33 511.09 63.33z"/>
            <circle fill="#52c41a" cx="346" cy="350" r="35"/>
            <circle fill="#52c41a" cx="676" cy="350" r="35"/>
            <path fill="#52c41a" d="M512 550c-89.6 0-162.4-48.8-162.4-48.8s72.8 97.6 162.4 97.6 162.4-97.6 162.4-97.6-72.8 48.8-162.4 48.8z"/>
        </svg>
    `;

    // 等待DOM加载完成后插入
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            document.body.appendChild(icon);
        });
    } else {
        document.body.appendChild(icon);
    }

    // 鼠标移入移出效果
    icon.addEventListener('mouseenter', () => {
        icon.classList.remove('pulse');
    });

    icon.addEventListener('mouseleave', () => {
        icon.classList.add('pulse');
    });

    // 暴露API (可选)
    window.QQService = {
        show: () => icon.style.display = 'flex',
        hide: () => icon.style.display = 'none',
        setUrl: (url) => icon.href = url
    };

})();
