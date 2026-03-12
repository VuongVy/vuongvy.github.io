document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.minimal-icon-btn');
    const systemTitleObj = document.getElementById('system-title');
    const partNameObj = document.getElementById('part-name');
    
    // Checkbox switches
    const toggleOthers = document.getElementById('toggle-others');
    const toggleSelected = document.getElementById('toggle-selected');
    
    // Model & Controls
    const modelViewer = document.getElementById('anatomy-model');
    const btnReset = document.getElementById('btn-reset');

    // Data for UI update
    const systemsInfo = {
        skeletal: {
            title: 'Skeletal system',
            partName: 'Full Framework'
        },
        muscular: {
            title: 'Muscular system',
            partName: 'Right myomeres'
        },
        cardio: {
            title: 'Cardiovascular system',
            partName: 'Main Network'
        },
        nervous: {
            title: 'Nervous system',
            partName: 'Central Nervous'
        },
        lungs: { title: 'Respiratory system', partName: 'Lungs' },
        stomach: { title: 'Digestive system', partName: 'Stomach' }
    };

    function applySystemChange(systemKey, buttonElement) {
        if (!systemsInfo[systemKey]) return;
        const data = systemsInfo[systemKey];
        
        // Update Buttons Classes (Visual Underline & Opacity)
        buttons.forEach(btn => btn.classList.remove('active'));
        buttonElement.classList.add('active');
        
        // Update Text Display via Fade Animation
        systemTitleObj.style.opacity = 0;
        partNameObj.style.opacity = 0;
        
        setTimeout(() => {
            systemTitleObj.innerText = data.title;
            partNameObj.innerText = data.partName;
            
            systemTitleObj.style.opacity = 1;
            partNameObj.style.opacity = 1;

            // Optional: reset toggles when changing system
            // toggleOthers.checked = false;
            // toggleSelected.checked = false;
        }, 150);
    }

    // Attach Click Events to Menu
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            applySystemChange(target, button);
        });
    });

    // Reset Camera
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            if(modelViewer) {
                modelViewer.cameraOrbit = '0deg 75deg 105%';
                modelViewer.cameraTarget = 'auto auto auto';
            }
        });
    }

    // Toggles logic (for console/future implementation)
    if (toggleOthers) {
        toggleOthers.addEventListener('change', (e) => {
            console.log('Hide other elements:', e.target.checked);
            // Trigger mesh visibility update inside model-viewer here
        });
    }

    if (toggleSelected) {
        toggleSelected.addEventListener('change', (e) => {
            console.log('Hide selected element:', e.target.checked);
            // Trigger mesh visibility update inside model-viewer here
        });
    }

    // Initialize with smooth transitions
    systemTitleObj.style.transition = 'opacity 0.2s';
    partNameObj.style.transition = 'opacity 0.2s';
});
