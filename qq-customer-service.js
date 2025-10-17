/**
 * 纯JavaScript实现的QQ在线客服悬浮窗
 * 无需依赖jQuery
 */
(function() {
    'use strict';

    // 配置项
    const config = {
        qqs: [
            { name: '售前客服', qq: '123456789' },
            { name: '售后客服', qq: '987654321' }
        ],
        tel: '400-123-4567',
        position: {
            bottom: '80px',  // 距离底部
            right: '20px'    // 距离右侧
        },
        autoShow: true,      // 是否自动展开
        hoverToShow: true    // 鼠标悬停展开(false则点击展开)
    };

    // 创建样式
    const style = document.createElement('style');
    style.textContent = `
        .qq-service-wrapper {
            position: fixed;
            bottom: ${config.position.bottom};
            right: ${config.position.right};
            z-index: 9999;
            font-family: "Microsoft YaHei", Arial, sans-serif;
            transition: transform 0.3s ease;
        }

        .qq-service-wrapper.collapsed {
            transform: translateX(calc(100% - 50px));
        }

        .qq-service-btn {
            position: absolute;
            left: -40px;
            top: 0;
            width: 40px;
            height: 120px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border-radius: 8px 0 0 8px;
            font-size: 14px;
            font-weight: bold;
            writing-mode: vertical-rl;
            letter-spacing: 2px;
            box-shadow: -2px 2px 10px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }

        .qq-service-btn:hover {
            background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
            box-shadow: -2px 2px 15px rgba(0,0,0,0.2);
        }

        .qq-service-panel {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            overflow: hidden;
            width: 260px;
        }

        .qq-service-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px;
            font-size: 16px;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .qq-service-close {
            cursor: pointer;
            font-size: 20px;
            line-height: 1;
            opacity: 0.8;
            transition: opacity 0.2s;
        }

        .qq-service-close:hover {
            opacity: 1;
        }

        .qq-service-content {
            padding: 20px 15px;
        }

        .qq-service-item {
            margin-bottom: 15px;
        }

        .qq-service-item:last-child {
            margin-bottom: 0;
        }

        .qq-service-link {
            display: flex;
            align-items: center;
            padding: 12px;
            background: #f8f9fa;
            border-radius: 8px;
            text-decoration: none;
            color: #333;
            transition: all 0.3s ease;
            border: 1px solid transparent;
        }

        .qq-service-link:hover {
            background: #e9ecef;
            border-color: #667eea;
            transform: translateX(2px);
        }

        .qq-service-icon {
            width: 32px;
            height: 32px;
            margin-right: 10px;
            flex-shrink: 0;
        }

        .qq-service-name {
            font-size: 14px;
            font-weight: 500;
        }

        .qq-service-divider {
            height: 1px;
            background: #e9ecef;
            margin: 15px 0;
        }

        .qq-service-tel {
            text-align: center;
            padding: 12px;
            background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
            border-radius: 8px;
        }

        .qq-service-tel-label {
            font-size: 12px;
            color: #666;
            margin-bottom: 5px;
        }

        .qq-service-tel-number {
            font-size: 18px;
            font-weight: bold;
            color: #d63031;
            letter-spacing: 1px;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .qq-service-wrapper.initial {
            animation: slideIn 0.5s ease;
        }
    `;
    document.head.appendChild(style);

    // 创建HTML结构
    const wrapper = document.createElement('div');
    wrapper.className = `qq-service-wrapper ${config.autoShow ? 'initial' : 'collapsed'}`;

    // 生成QQ列表HTML
    const qqListHTML = config.qqs.map(item => `
        <div class="qq-service-item">
            <a href="http://wpa.qq.com/msgrd?v=3&uin=${item.qq}&site=qq&menu=yes"
               target="_blank"
               class="qq-service-link">
                <svg class="qq-service-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#12B7F5" d="M511.09 63.33c-222.8 0-403.84 144.3-403.84 321.52 0 99.25 48.2 188.09 124.34 248.91-8.3 72.73-35.2 138.03-35.2 138.03s91.82-22.43 154.66-76.54c38.54 11.07 79.6 17.07 121.92 17.07 222.78 0 403.82-144.3 403.82-321.53S733.87 63.33 511.09 63.33z"/>
                    <circle fill="#FFFFFF" cx="346" cy="380" r="45"/>
                    <circle fill="#FFFFFF" cx="676" cy="380" r="45"/>
                    <path fill="#FFFFFF" d="M512 580c-89.6 0-162.4-48.8-162.4-48.8s72.8 97.6 162.4 97.6 162.4-97.6 162.4-97.6-72.8 48.8-162.4 48.8z"/>
                </svg>
                <span class="qq-service-name">${item.name}</span>
            </a>
        </div>
    `).join('');

    wrapper.innerHTML = `
        <div class="qq-service-btn">在线客服</div>
        <div class="qq-service-panel">
            <div class="qq-service-header">
                <span>💬 联系我们</span>
                <span class="qq-service-close">×</span>
            </div>
            <div class="qq-service-content">
                ${qqListHTML}
                ${config.tel ? `
                    <div class="qq-service-divider"></div>
                    <div class="qq-service-tel">
                        <div class="qq-service-tel-label">客服热线</div>
                        <div class="qq-service-tel-number">${config.tel}</div>
                    </div>
                ` : ''}
            </div>
        </div>
    `;

    // 等待DOM加载完成后插入
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            document.body.appendChild(wrapper);
            initEvents();
        });
    } else {
        document.body.appendChild(wrapper);
        initEvents();
    }

    // 初始化事件
    function initEvents() {
        const btn = wrapper.querySelector('.qq-service-btn');
        const closeBtn = wrapper.querySelector('.qq-service-close');

        if (config.hoverToShow) {
            // 鼠标悬停模式
            wrapper.addEventListener('mouseenter', () => {
                wrapper.classList.remove('collapsed');
            });
            wrapper.addEventListener('mouseleave', () => {
                wrapper.classList.add('collapsed');
            });
        } else {
            // 点击切换模式
            btn.addEventListener('click', () => {
                wrapper.classList.toggle('collapsed');
            });
        }

        // 关闭按钮
        closeBtn.addEventListener('click', () => {
            wrapper.style.display = 'none';
        });
    }

    // 暴露配置接口
    window.QQCustomerService = {
        show: function() {
            wrapper.style.display = 'block';
            wrapper.classList.remove('collapsed');
        },
        hide: function() {
            wrapper.classList.add('collapsed');
        },
        remove: function() {
            wrapper.style.display = 'none';
        },
        updateConfig: function(newConfig) {
            Object.assign(config, newConfig);
        }
    };

})();
