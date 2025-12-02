// ========================================
// GLOBAL VARIABLES
// ========================================
// NOTA: Esta lista se generará automáticamente cuando se suban las fotos
// Puedes usar el script generar_lista_fotos.py para actualizarla
const photos = [
    'images/DSC_0698.JPG',
    'images/DSC_0699.JPG',
    'images/DSC_0703.JPG',
    'images/DSC_0704.JPG',
    'images/DSC_0705.JPG',
    'images/DSC_0707.JPG',
    'images/DSC_0709.JPG',
    'images/DSC_0711.JPG',
    'images/DSC_0716.JPG',
    'images/DSC_0717.JPG',
    'images/DSC_0722.JPG',
    'images/DSC_0723.JPG',
    'images/DSC_0724.JPG',
    'images/DSC_0725.JPG',
    'images/DSC_0726.JPG',
    'images/DSC_0728.JPG',
    'images/DSC_0730.JPG',
    'images/DSC_0731.JPG',
    'images/DSC_0732.JPG',
    'images/DSC_0733.JPG',
    'images/DSC_0734.JPG',
    'images/DSC_0735.JPG',
    'images/DSC_0736.JPG',
    'images/DSC_0737.JPG',
    'images/DSC_0738.JPG',
    'images/DSC_0739.JPG',
    'images/DSC_0740.JPG',
    'images/DSC_0741.JPG',
    'images/DSC_0742.JPG',
    'images/DSC_0743.JPG',
    'images/DSC_0745.JPG',
    'images/DSC_0746.JPG',
    'images/DSC_0747.JPG',
    'images/DSC_0748.JPG',
    'images/DSC_0749.JPG',
    'images/DSC_0750.JPG',
    'images/DSC_0752.JPG',
    'images/DSC_0753.JPG',
    'images/DSC_0754.JPG',
    'images/DSC_0756.JPG',
    'images/DSC_0758.JPG',
    'images/DSC_0759.JPG',
    'images/DSC_0760.JPG',
    'images/DSC_0761.JPG',
    'images/DSC_0762.JPG',
    'images/DSC_0765.JPG',
    'images/DSC_0766.JPG',
    'images/DSC_0768.JPG',
    'images/DSC_0769.JPG',
    'images/DSC_0770.JPG',
    'images/DSC_0771.JPG',
    'images/DSC_0774.JPG',
    'images/DSC_0775.JPG',
    'images/DSC_0776.JPG',
    'images/DSC_0777.JPG',
    'images/DSC_0778.JPG',
    'images/DSC_0780.JPG',
    'images/DSC_0781.JPG',
    'images/DSC_0783.JPG',
    'images/DSC_0784.JPG',
    'images/DSC_0785.JPG',
    'images/DSC_0786.JPG',
    'images/DSC_0788.JPG',
    'images/DSC_0790.JPG',
    'images/DSC_0794.JPG',
    'images/DSC_0795.JPG',
    'images/DSC_0796.JPG',
    'images/DSC_0797.JPG',
    'images/DSC_0799.JPG',
    'images/DSC_0800.JPG',
    'images/DSC_0801.JPG',
    'images/DSC_0802.JPG',
    'images/DSC_0803.JPG',
    'images/DSC_0804.JPG',
    'images/DSC_0805.JPG',
    'images/DSC_0806.JPG',
    'images/DSC_0807.JPG',
    'images/DSC_0808.JPG',
    'images/DSC_0809.JPG',
    'images/DSC_0810.JPG',
    'images/DSC_0811.JPG',
    'images/DSC_0812.JPG',
    'images/DSC_0813.JPG',
    'images/DSC_0814.JPG',
    'images/DSC_0815.JPG',
    'images/DSC_0816.JPG',
    'images/DSC_0817.JPG',
    'images/DSC_0818.JPG',
    'images/DSC_0819.JPG',
    'images/DSC_0820.JPG',
    'images/DSC_0821.JPG',
    'images/DSC_0822.JPG',
    'images/DSC_0823.JPG',
    'images/DSC_0824.JPG',
    'images/DSC_0825.JPG',
    'images/DSC_0826.JPG',
    'images/DSC_0827.JPG',
    'images/DSC_0828.JPG',
    'images/DSC_0829.JPG',
    'images/DSC_0830.JPG',
    'images/DSC_0831.JPG',
    'images/DSC_0832.JPG',
    'images/DSC_0833.JPG',
    'images/DSC_0834.JPG',
    'images/DSC_0835.JPG',
    'images/DSC_0836.JPG',
    'images/DSC_0837.JPG',
    'images/DSC_0838.JPG',
    'images/DSC_0839.JPG',
    'images/DSC_0840.JPG',
    'images/DSC_0841.JPG',
    'images/DSC_0842.JPG',
    'images/DSC_0843.JPG',
    'images/DSC_0844.JPG',
    'images/DSC_0845.JPG',
    'images/DSC_0846.JPG',
    'images/DSC_0847.JPG',
    'images/DSC_0848.JPG',
    'images/DSC_0849.JPG',
    'images/DSC_0850.JPG',
    'images/DSC_0851.JPG',
    'images/DSC_0852.JPG',
    'images/DSC_0853.JPG',
    'images/DSC_0854.JPG',
    'images/DSC_0855.JPG',
    'images/DSC_0856.JPG',
    'images/DSC_0857.JPG',
    'images/DSC_0858.JPG',
    'images/DSC_0859.JPG',
    'images/DSC_0860.JPG',
    'images/DSC_0861.JPG',
    'images/DSC_0862.JPG',
    'images/DSC_0863.JPG',
    'images/DSC_0864.JPG',
    'images/DSC_0865.JPG',
    'images/DSC_0866.JPG',
    'images/DSC_0867.JPG',
    'images/DSC_0868.JPG',
    'images/DSC_0869.JPG',
    'images/DSC_0870.JPG',
    'images/DSC_0871.JPG',
    'images/DSC_0872.JPG',
    'images/DSC_0873.JPG',
    'images/DSC_0874.JPG',
    'images/DSC_0875.JPG',
    'images/DSC_0876.JPG',
    'images/DSC_0877.JPG',
    'images/DSC_0878.JPG',
    'images/DSC_0879.JPG',
    'images/DSC_0880.JPG',
    'images/DSC_0881.JPG',
    'images/DSC_0882.JPG',
    'images/DSC_0883.JPG',
    'images/DSC_0884.JPG',
    'images/DSC_0885.JPG',
    'images/DSC_0886.JPG',
    'images/DSC_0887.JPG',
    'images/DSC_0888.JPG',
    'images/DSC_0889.JPG',
    'images/DSC_0890.JPG',
    'images/DSC_0891.JPG',
    'images/DSC_0892.JPG',
    'images/DSC_0893.JPG',
    'images/DSC_0894.JPG',
    'images/DSC_0895.JPG',
    'images/DSC_0896.JPG',
    'images/DSC_0897.JPG',
    'images/DSC_0898.JPG',
    'images/DSC_0899.JPG',
    'images/DSC_0900.JPG',
    'images/DSC_0901.JPG',
    'images/DSC_0902.JPG',
    'images/DSC_0903.JPG',
    'images/DSC_0904.JPG',
    'images/DSC_0905.JPG',
    'images/DSC_0906.JPG',
    'images/DSC_0907.JPG',
    'images/DSC_0908.JPG',
    'images/DSC_0909.JPG',
    'images/DSC_0910.JPG',
    'images/DSC_0911.JPG',
    'images/DSC_0912.JPG',
    'images/DSC_0913.JPG',
    'images/DSC_0914.JPG',
    'images/DSC_0915.JPG',
    'images/DSC_0916.JPG',
    'images/DSC_0917.JPG',
    'images/DSC_0918.JPG',
    'images/DSC_0919.JPG',
    'images/DSC_0920.JPG',
    'images/DSC_0921.JPG',
    'images/DSC_0922.JPG',
    'images/DSC_0923.JPG',
    'images/DSC_0924.JPG',
    'images/DSC_0925.JPG',
    'images/DSC_0926.JPG',
    'images/DSC_0927.JPG',
    'images/DSC_0928.JPG',
    'images/DSC_0929.JPG',
    'images/DSC_0930.JPG',
    'images/DSC_0931.JPG',
    'images/DSC_0932.JPG',
    'images/DSC_0933.JPG',
    'images/DSC_0934.JPG',
    'images/DSC_0935.JPG',
    'images/DSC_0936.JPG',
    'images/DSC_0937.JPG',
    'images/DSC_0938.JPG',
    'images/DSC_0939.JPG',
    'images/DSC_0940.JPG',
    'images/DSC_0941.JPG',
    'images/DSC_0942.JPG',
    'images/DSC_0943.JPG',
    'images/DSC_0944.JPG',
    'images/DSC_0945.JPG',
    'images/DSC_0946.JPG',
    'images/DSC_0947.JPG',
    'images/DSC_0948.JPG',
    'images/DSC_0949.JPG',
    'images/DSC_0950.JPG',
    'images/DSC_0951.JPG',
    'images/DSC_0952.JPG',
    'images/DSC_0953.JPG',
    'images/DSC_0954.JPG',
    'images/DSC_0955.JPG',
    'images/DSC_0956.JPG',
    'images/DSC_0957.JPG',
    'images/DSC_0958.JPG',
    'images/DSC_0961.JPG',
    'images/DSC_0962.JPG',
    'images/DSC_0963.JPG',
    'images/DSC_0964.JPG',
    'images/DSC_0965.JPG',
    'images/DSC_0966.JPG',
    'images/DSC_0967.JPG',
    'images/DSC_0968.JPG',
    'images/DSC_0969.JPG',
    'images/DSC_0970.JPG',
    'images/DSC_0971.JPG',
    'images/DSC_0972.JPG',
    'images/DSC_0973.JPG',
    'images/DSC_0974.JPG',
    'images/DSC_0975.JPG',
    'images/DSC_0976.JPG',
    'images/DSC_0977.JPG',
    'images/DSC_0978.JPG',
    'images/DSC_0979.JPG',
    'images/DSC_0980.JPG',
    'images/DSC_0981.JPG',
    'images/DSC_0982.JPG',
    'images/DSC_0983.JPG',
    'images/DSC_0984.JPG',
    'images/DSC_0985.JPG',
    'images/DSC_0986.JPG',
    'images/DSC_0987.JPG',
    'images/DSC_0988.JPG',
    'images/DSC_0989.JPG',
    'images/DSC_0990.JPG',
    'images/DSC_0991.JPG',
    'images/DSC_0992.JPG',
    'images/DSC_0993.JPG',
    'images/DSC_0994.JPG',
    'images/DSC_0995.JPG',
    'images/DSC_0996.JPG',
    'images/DSC_0997.JPG',
    'images/DSC_0998.JPG',
    'images/DSC_0999.JPG',
    'images/DSC_1000.JPG',
    'images/DSC_1001.JPG',
    'images/DSC_1002.JPG',
    'images/DSC_1003.JPG',
    'images/DSC_1004.JPG',
    'images/DSC_1005.JPG',
    'images/DSC_1006.JPG',
    'images/DSC_1007.JPG',
    'images/DSC_1008.JPG',
    'images/DSC_1009.JPG',
    'images/DSC_1010.JPG',
    'images/DSC_1011.JPG',
    'images/DSC_1012.JPG',
    'images/DSC_1013.JPG',
    'images/DSC_1014.JPG',
    'images/DSC_1015.JPG',
    'images/DSC_1016.JPG',
    'images/DSC_1017.JPG',
    'images/DSC_1018.JPG',
    'images/DSC_1019.JPG',
    'images/DSC_1020.JPG',
    'images/DSC_1021.JPG',
    'images/DSC_1022.JPG',
    'images/DSC_1023.JPG',
    'images/DSC_1024.JPG',
    'images/DSC_1025.JPG',
    'images/DSC_1026.JPG',
    'images/DSC_1027.JPG',
    'images/DSC_1028.JPG',
    'images/DSC_1029.JPG',
    'images/DSC_1030.JPG',
    'images/DSC_1033.JPG',
    'images/DSC_1034.JPG',
    'images/DSC_1035.JPG',
    'images/DSC_1036.JPG',
    'images/DSC_1037.JPG',
    'images/DSC_1038.JPG',
    'images/DSC_1039.JPG',
    'images/DSC_1040.JPG',
    'images/DSC_1041.JPG',
    'images/DSC_1042.JPG',
    'images/DSC_1043.JPG',
    'images/DSC_1044.JPG',
    'images/DSC_1045.JPG',
    'images/DSC_1046.JPG',
    'images/DSC_1047.JPG',
    'images/DSC_1048.JPG',
    'images/DSC_1049.JPG',
    'images/DSC_1050.JPG',
    'images/DSC_1051.JPG',
    'images/DSC_1052.JPG',
    'images/DSC_1053.JPG',
    'images/DSC_1054.JPG',
    'images/DSC_1055.JPG',
    'images/DSC_1056.JPG',
    'images/DSC_1057.JPG',
    'images/DSC_1058.JPG',
    'images/DSC_1059.JPG',
    'images/DSC_1060.JPG',
    'images/DSC_1061.JPG',
    'images/DSC_1062.JPG',
    'images/DSC_1063.JPG',
    'images/DSC_1064.JPG',
    'images/DSC_1065.JPG',
    'images/DSC_1066.JPG',
    'images/DSC_1067.JPG',
    'images/DSC_1068.JPG',
    'images/DSC_1069.JPG',
    'images/DSC_1070.JPG',
    'images/DSC_1071.JPG',
    'images/DSC_1072.JPG',
    'images/DSC_1073.JPG',
    'images/DSC_1074.JPG',
    'images/DSC_1075.JPG',
    'images/DSC_1076.JPG',
    'images/DSC_1077.JPG',
    'images/DSC_1078.JPG',
    'images/DSC_1079.JPG',
    'images/DSC_1080.JPG',
    'images/DSC_1081.JPG',
    'images/DSC_1082.JPG',
    'images/DSC_1083.JPG',
    'images/DSC_1084.JPG',
    'images/DSC_1085.JPG',
    'images/DSC_1086.JPG',
    'images/DSC_1087.JPG',
    'images/DSC_1088.JPG',
    'images/DSC_1089.JPG',
    'images/DSC_1090.JPG',
    'images/DSC_1091.JPG',
    'images/DSC_1092.JPG',
    'images/DSC_1093.JPG'
];

const STORAGE_KEY = 'xv_andrea_noemi_photo_selections';
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
            console.log('Selecciones cargadas desde localStorage:', photoSelections);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
        console.log('Selecciones guardadas en localStorage');
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">No hay fotos disponibles aún. Por favor, sube las fotos al directorio images/</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        // Add category classes
        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        // Build badges HTML
        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        card.innerHTML = `
            <div class="photo-image-container">
                <img src="${photo}" alt="Foto ${index + 1}" loading="lazy">
            </div>
            <div class="photo-number">Foto ${index + 1}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    // Update button states
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    modalImage.src = photos[index];
    modalPhotoNumber.textContent = `Foto ${index + 1}`;

    // Load current selections
    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    // Only save if there's at least one selection
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        // Remove from selections if nothing is selected
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'XV Años Andrea Noemí Hernández Soto',
        quinceañera: 'Andrea Noemí Hernández Soto',
        padres: {
            madre: 'Alejandra Soto de la Mora',
            padre: 'Cristóbal Hernández Romero'
        },
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-xv-andrea-noemi-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '🎉 SELECCIÓN DE FOTOS - XV AÑOS ANDREA NOEMÍ HERNÁNDEZ SOTO\n';
    summary += '════════════════════════════════════════════════════════════\n\n';
    summary += `👑 QUINCEAÑERA: Andrea Noemí Hernández Soto\n`;
    summary += `👨‍👩 PADRES:\n`;
    summary += `   Madre: Alejandra Soto de la Mora\n`;
    summary += `   Padre: Cristóbal Hernández Romero\n\n`;
    summary += `📊 RESUMEN GENERAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = summary;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Resumen copiado al portapapeles', 'success');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved selections
    loadSelections();

    // Render gallery
    renderGallery();

    // Update stats
    updateStats();

    // Update filter buttons
    updateFilterButtons();

    // Filter buttons
    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    // Set data-filter attributes
    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    // Set initial active filter
    document.getElementById('btnFilterAll').classList.add('active');

    // Action buttons
    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    // Modal controls
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('selected');
        });
    });

    // Close modal on outside click
    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            }
        }
    });

    console.log('Selector de fotos inicializado');
    console.log(`Total de fotos: ${photos.length}`);
    console.log('Selecciones cargadas:', photoSelections);
});

// ========================================
// AUTO-SAVE ON VISIBILITY CHANGE
// ========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Página oculta - guardando selecciones...');
        saveSelections();
    }
});

// ========================================
// BEFORE UNLOAD WARNING
// ========================================
window.addEventListener('beforeunload', (e) => {
    saveSelections();
});
