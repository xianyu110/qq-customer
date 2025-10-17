// 创建客服按钮和弹窗的纯JavaScript代码 - 自然绿色清新版
(function() {
    'use strict';

    // 配置项
    const config = {
        qrImageUrl: 'https://qm.qq.com/q/Q4YTVK5T6q',
        workTime: '7×24小时在线服务',
        buttonColor: '#52c41a'
    };

    // 创建样式
    const style = document.createElement('style');
    style.textContent = `
        .customer-service-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 56px;
            height: 56px;
            background: linear-gradient(135deg, #73d13d 0%, #52c41a 100%);
            border: none;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 8px 24px rgba(82, 196, 26, 0.25);
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .customer-service-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2), transparent);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .customer-service-btn:hover::before {
            opacity: 1;
        }

        .customer-service-btn svg {
            width: 28px;
            height: 28px;
            fill: white;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .customer-service-btn:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow: 0 12px 32px rgba(82, 196, 26, 0.35);
        }

        .customer-service-btn:active {
            transform: translateY(-2px) scale(1.02);
        }

        .qr-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .qr-modal.active {
            opacity: 1;
            visibility: visible;
        }

        .qr-content {
            background: linear-gradient(180deg, #ffffff 0%, #f6ffed 100%);
            border-radius: 24px;
            padding: 40px;
            max-width: 400px;
            width: 90%;
            text-align: center;
            transform: scale(0.9) translateY(30px);
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(82, 196, 26, 0.1);
        }

        .qr-modal.active .qr-content {
            transform: scale(1) translateY(0);
        }

        .qr-header {
            margin-bottom: 24px;
        }

        .qr-header .icon-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, #73d13d 0%, #52c41a 100%);
            border-radius: 50%;
            margin-bottom: 16px;
            box-shadow: 0 8px 24px rgba(82, 196, 26, 0.25);
        }

        .qr-header .icon-wrapper svg {
            width: 32px;
            height: 32px;
            fill: white;
        }

        .qr-header h2 {
            color: #262626;
            margin: 0 0 8px 0;
            font-size: 24px;
            font-weight: 600;
            letter-spacing: -0.5px;
        }

        .qr-header p {
            color: #8c8c8c;
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
        }

        .qr-code {
            width: 220px;
            height: 220px;
            margin: 24px auto;
            background: white;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
            overflow: hidden;
            border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .qr-code img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .qr-footer {
            margin-top: 24px;
        }

        .qr-footer .time-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 16px;
            background: linear-gradient(135deg, #f6ffed 0%, #d9f7be 100%);
            border-radius: 20px;
            font-size: 13px;
            color: #52c41a;
            font-weight: 500;
            margin-bottom: 20px;
            border: 1px solid rgba(82, 196, 26, 0.15);
        }

        .qr-link-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 28px;
            background: linear-gradient(135deg, #73d13d 0%, #52c41a 100%);
            color: white;
            text-decoration: none;
            border-radius: 28px;
            font-size: 15px;
            font-weight: 600;
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 0 4px 16px rgba(82, 196, 26, 0.25);
            margin-bottom: 12px;
        }

        .qr-link-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(82, 196, 26, 0.35);
        }

        .close-btn {
            display: inline-block;
            padding: 10px 24px;
            background: transparent;
            color: #8c8c8c;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s ease;
        }

        .close-btn:hover {
            color: #52c41a;
            background: rgba(82, 196, 26, 0.05);
        }

        @media (max-width: 768px) {
            .customer-service-btn {
                bottom: 20px;
                right: 20px;
                width: 52px;
                height: 52px;
            }

            .customer-service-btn svg {
                width: 26px;
                height: 26px;
            }

            .qr-content {
                padding: 32px 24px;
            }

            .qr-code {
                width: 200px;
                height: 200px;
            }

            .qr-header h2 {
                font-size: 22px;
            }
        }
    `;

    document.head.appendChild(style);

    // 创建客服按钮
    const customerServiceBtn = document.createElement('button');
    customerServiceBtn.className = 'customer-service-btn';
    customerServiceBtn.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.31-3.85-.85l-.27-.13-2.85.48.48-2.85-.13-.27C4.31 14.68 4 13.38 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
            <circle cx="8.5" cy="12" r="1"/>
            <circle cx="12" cy="12" r="1"/>
            <circle cx="15.5" cy="12" r="1"/>
        </svg>
    `;
    customerServiceBtn.setAttribute('aria-label', '在线客服');
    customerServiceBtn.setAttribute('title', '联系客服');

    // 创建弹窗
    const qrModal = document.createElement('div');
    qrModal.className = 'qr-modal';
    qrModal.innerHTML = `
        <div class="qr-content">
            <div class="qr-header">
                <div class="icon-wrapper">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.31-3.85-.85l-.27-.13-2.85.48.48-2.85-.13-.27C4.31 14.68 4 13.38 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                </div>
                <h2>联系客服</h2>
                <p>扫描二维码或点击按钮加入QQ客服</p>
            </div>
            <div class="qr-code" id="qrCode">
                <span style="color: #bfbfbf; font-size: 14px;">加载中...</span>
            </div>
            <div class="qr-footer">
                <div class="time-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    ${config.workTime}
                </div>
                <div>
                    <a href="${config.qrImageUrl}" target="_blank" class="qr-link-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        立即打开QQ
                    </a>
                </div>
                <button class="close-btn" id="closeBtn">关闭</button>
            </div>
        </div>
    `;

    // 初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        document.body.appendChild(customerServiceBtn);
        document.body.appendChild(qrModal);

        const closeBtn = document.getElementById('closeBtn');
        const qrCode = document.getElementById('qrCode');

        function generateQRCode() {
            const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(config.qrImageUrl)}`;
            qrCode.innerHTML = `<img src="${qrApiUrl}" alt="客服二维码" onerror="this.parentElement.innerHTML='<span style=color:#bfbfbf;font-size:14px>二维码加载失败<br><br>请点击下方按钮</span>'">`;
        }

        function showQRModal() {
            generateQRCode();
            qrModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function hideQRModal() {
            qrModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        customerServiceBtn.addEventListener('click', showQRModal);
        closeBtn.addEventListener('click', hideQRModal);

        qrModal.addEventListener('click', function(e) {
            if (e.target === qrModal) {
                hideQRModal();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && qrModal.classList.contains('active')) {
                hideQRModal();
            }
        });

        console.log('✅ 客服系统已加载');
    }

    window.CustomerService = {
        show: () => document.querySelector('.customer-service-btn').click(),
        hide: () => document.getElementById('closeBtn').click(),
        updateConfig: (newConfig) => Object.assign(config, newConfig)
    };

})();
