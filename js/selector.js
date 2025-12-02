// ========================================
// GLOBAL VARIABLES
// ========================================
// NOTA: Esta lista se generará automáticamente cuando se suban las fotos
// Puedes usar el script generar_lista_fotos.py para actualizarla
const photos = [
    'images/DSC_0698.webp',
    'images/DSC_0699.webp',
    'images/DSC_0703.webp',
    'images/DSC_0704.webp',
    'images/DSC_0705.webp',
    'images/DSC_0707.webp',
    'images/DSC_0709.webp',
    'images/DSC_0711.webp',
    'images/DSC_0716.webp',
    'images/DSC_0717.webp',
    'images/DSC_0722.webp',
    'images/DSC_0723.webp',
    'images/DSC_0724.webp',
    'images/DSC_0725.webp',
    'images/DSC_0726.webp',
    'images/DSC_0728.webp',
    'images/DSC_0730.webp',
    'images/DSC_0731.webp',
    'images/DSC_0732.webp',
    'images/DSC_0733.webp',
    'images/DSC_0734.webp',
    'images/DSC_0735.webp',
    'images/DSC_0736.webp',
    'images/DSC_0737.webp',
    'images/DSC_0738.webp',
    'images/DSC_0739.webp',
    'images/DSC_0740.webp',
    'images/DSC_0741.webp',
    'images/DSC_0742.webp',
    'images/DSC_0743.webp',
    'images/DSC_0745.webp',
    'images/DSC_0746.webp',
    'images/DSC_0747.webp',
    'images/DSC_0748.webp',
    'images/DSC_0749.webp',
    'images/DSC_0750.webp',
    'images/DSC_0752.webp',
    'images/DSC_0753.webp',
    'images/DSC_0754.webp',
    'images/DSC_0756.webp',
    'images/DSC_0758.webp',
    'images/DSC_0759.webp',
    'images/DSC_0760.webp',
    'images/DSC_0761.webp',
    'images/DSC_0762.webp',
    'images/DSC_0765.webp',
    'images/DSC_0766.webp',
    'images/DSC_0768.webp',
    'images/DSC_0769.webp',
    'images/DSC_0770.webp',
    'images/DSC_0771.webp',
    'images/DSC_0774.webp',
    'images/DSC_0775.webp',
    'images/DSC_0776.webp',
    'images/DSC_0777.webp',
    'images/DSC_0778.webp',
    'images/DSC_0780.webp',
    'images/DSC_0781.webp',
    'images/DSC_0783.webp',
    'images/DSC_0784.webp',
    'images/DSC_0785.webp',
    'images/DSC_0786.webp',
    'images/DSC_0788.webp',
    'images/DSC_0790.webp',
    'images/DSC_0794.webp',
    'images/DSC_0795.webp',
    'images/DSC_0796.webp',
    'images/DSC_0797.webp',
    'images/DSC_0799.webp',
    'images/DSC_0800.webp',
    'images/DSC_0801.webp',
    'images/DSC_0802.webp',
    'images/DSC_0803.webp',
    'images/DSC_0804.webp',
    'images/DSC_0805.webp',
    'images/DSC_0806.webp',
    'images/DSC_0807.webp',
    'images/DSC_0808.webp',
    'images/DSC_0809.webp',
    'images/DSC_0810.webp',
    'images/DSC_0811.webp',
    'images/DSC_0812.webp',
    'images/DSC_0813.webp',
    'images/DSC_0814.webp',
    'images/DSC_0815.webp',
    'images/DSC_0816.webp',
    'images/DSC_0817.webp',
    'images/DSC_0818.webp',
    'images/DSC_0819.webp',
    'images/DSC_0820.webp',
    'images/DSC_0821.webp',
    'images/DSC_0822.webp',
    'images/DSC_0823.webp',
    'images/DSC_0824.webp',
    'images/DSC_0825.webp',
    'images/DSC_0826.webp',
    'images/DSC_0827.webp',
    'images/DSC_0828.webp',
    'images/DSC_0829.webp',
    'images/DSC_0830.webp',
    'images/DSC_0831.webp',
    'images/DSC_0832.webp',
    'images/DSC_0833.webp',
    'images/DSC_0834.webp',
    'images/DSC_0835.webp',
    'images/DSC_0836.webp',
    'images/DSC_0837.webp',
    'images/DSC_0838.webp',
    'images/DSC_0839.webp',
    'images/DSC_0840.webp',
    'images/DSC_0841.webp',
    'images/DSC_0842.webp',
    'images/DSC_0843.webp',
    'images/DSC_0844.webp',
    'images/DSC_0845.webp',
    'images/DSC_0846.webp',
    'images/DSC_0847.webp',
    'images/DSC_0848.webp',
    'images/DSC_0849.webp',
    'images/DSC_0850.webp',
    'images/DSC_0851.webp',
    'images/DSC_0852.webp',
    'images/DSC_0853.webp',
    'images/DSC_0854.webp',
    'images/DSC_0855.webp',
    'images/DSC_0856.webp',
    'images/DSC_0857.webp',
    'images/DSC_0858.webp',
    'images/DSC_0859.webp',
    'images/DSC_0860.webp',
    'images/DSC_0861.webp',
    'images/DSC_0862.webp',
    'images/DSC_0863.webp',
    'images/DSC_0864.webp',
    'images/DSC_0865.webp',
    'images/DSC_0866.webp',
    'images/DSC_0867.webp',
    'images/DSC_0868.webp',
    'images/DSC_0869.webp',
    'images/DSC_0870.webp',
    'images/DSC_0871.webp',
    'images/DSC_0872.webp',
    'images/DSC_0873.webp',
    'images/DSC_0874.webp',
    'images/DSC_0875.webp',
    'images/DSC_0876.webp',
    'images/DSC_0877.webp',
    'images/DSC_0878.webp',
    'images/DSC_0879.webp',
    'images/DSC_0880.webp',
    'images/DSC_0881.webp',
    'images/DSC_0882.webp',
    'images/DSC_0883.webp',
    'images/DSC_0884.webp',
    'images/DSC_0885.webp',
    'images/DSC_0886.webp',
    'images/DSC_0887.webp',
    'images/DSC_0888.webp',
    'images/DSC_0889.webp',
    'images/DSC_0890.webp',
    'images/DSC_0891.webp',
    'images/DSC_0892.webp',
    'images/DSC_0893.webp',
    'images/DSC_0894.webp',
    'images/DSC_0895.webp',
    'images/DSC_0896.webp',
    'images/DSC_0897.webp',
    'images/DSC_0898.webp',
    'images/DSC_0899.webp',
    'images/DSC_0900.webp',
    'images/DSC_0901.webp',
    'images/DSC_0902.webp',
    'images/DSC_0903.webp',
    'images/DSC_0904.webp',
    'images/DSC_0905.webp',
    'images/DSC_0906.webp',
    'images/DSC_0907.webp',
    'images/DSC_0908.webp',
    'images/DSC_0909.webp',
    'images/DSC_0910.webp',
    'images/DSC_0911.webp',
    'images/DSC_0912.webp',
    'images/DSC_0913.webp',
    'images/DSC_0914.webp',
    'images/DSC_0915.webp',
    'images/DSC_0916.webp',
    'images/DSC_0917.webp',
    'images/DSC_0918.webp',
    'images/DSC_0919.webp',
    'images/DSC_0920.webp',
    'images/DSC_0921.webp',
    'images/DSC_0922.webp',
    'images/DSC_0923.webp',
    'images/DSC_0924.webp',
    'images/DSC_0925.webp',
    'images/DSC_0926.webp',
    'images/DSC_0927.webp',
    'images/DSC_0928.webp',
    'images/DSC_0929.webp',
    'images/DSC_0930.webp',
    'images/DSC_0931.webp',
    'images/DSC_0932.webp',
    'images/DSC_0933.webp',
    'images/DSC_0934.webp',
    'images/DSC_0935.webp',
    'images/DSC_0936.webp',
    'images/DSC_0937.webp',
    'images/DSC_0938.webp',
    'images/DSC_0939.webp',
    'images/DSC_0940.webp',
    'images/DSC_0941.webp',
    'images/DSC_0942.webp',
    'images/DSC_0943.webp',
    'images/DSC_0944.webp',
    'images/DSC_0945.webp',
    'images/DSC_0946.webp',
    'images/DSC_0947.webp',
    'images/DSC_0948.webp',
    'images/DSC_0949.webp',
    'images/DSC_0950.webp',
    'images/DSC_0951.webp',
    'images/DSC_0952.webp',
    'images/DSC_0953.webp',
    'images/DSC_0954.webp',
    'images/DSC_0955.webp',
    'images/DSC_0956.webp',
    'images/DSC_0957.webp',
    'images/DSC_0958.webp',
    'images/DSC_0961.webp',
    'images/DSC_0962.webp',
    'images/DSC_0963.webp',
    'images/DSC_0964.webp',
    'images/DSC_0965.webp',
    'images/DSC_0966.webp',
    'images/DSC_0967.webp',
    'images/DSC_0968.webp',
    'images/DSC_0969.webp',
    'images/DSC_0970.webp',
    'images/DSC_0971.webp',
    'images/DSC_0972.webp',
    'images/DSC_0973.webp',
    'images/DSC_0974.webp',
    'images/DSC_0975.webp',
    'images/DSC_0976.webp',
    'images/DSC_0977.webp',
    'images/DSC_0978.webp',
    'images/DSC_0979.webp',
    'images/DSC_0980.webp',
    'images/DSC_0981.webp',
    'images/DSC_0982.webp',
    'images/DSC_0983.webp',
    'images/DSC_0984.webp',
    'images/DSC_0985.webp',
    'images/DSC_0986.webp',
    'images/DSC_0987.webp',
    'images/DSC_0988.webp',
    'images/DSC_0989.webp',
    'images/DSC_0990.webp',
    'images/DSC_0991.webp',
    'images/DSC_0992.webp',
    'images/DSC_0993.webp',
    'images/DSC_0994.webp',
    'images/DSC_0995.webp',
    'images/DSC_0996.webp',
    'images/DSC_0997.webp',
    'images/DSC_0998.webp',
    'images/DSC_0999.webp',
    'images/DSC_1000.webp',
    'images/DSC_1001.webp',
    'images/DSC_1002.webp',
    'images/DSC_1003.webp',
    'images/DSC_1004.webp',
    'images/DSC_1005.webp',
    'images/DSC_1006.webp',
    'images/DSC_1007.webp',
    'images/DSC_1008.webp',
    'images/DSC_1009.webp',
    'images/DSC_1010.webp',
    'images/DSC_1011.webp',
    'images/DSC_1012.webp',
    'images/DSC_1013.webp',
    'images/DSC_1014.webp',
    'images/DSC_1015.webp',
    'images/DSC_1016.webp',
    'images/DSC_1017.webp',
    'images/DSC_1018.webp',
    'images/DSC_1019.webp',
    'images/DSC_1020.webp',
    'images/DSC_1021.webp',
    'images/DSC_1022.webp',
    'images/DSC_1023.webp',
    'images/DSC_1024.webp',
    'images/DSC_1025.webp',
    'images/DSC_1026.webp',
    'images/DSC_1027.webp',
    'images/DSC_1028.webp',
    'images/DSC_1029.webp',
    'images/DSC_1030.webp',
    'images/DSC_1033.webp',
    'images/DSC_1034.webp',
    'images/DSC_1035.webp',
    'images/DSC_1036.webp',
    'images/DSC_1037.webp',
    'images/DSC_1038.webp',
    'images/DSC_1039.webp',
    'images/DSC_1040.webp',
    'images/DSC_1041.webp',
    'images/DSC_1042.webp',
    'images/DSC_1043.webp',
    'images/DSC_1044.webp',
    'images/DSC_1045.webp',
    'images/DSC_1046.webp',
    'images/DSC_1047.webp',
    'images/DSC_1048.webp',
    'images/DSC_1049.webp',
    'images/DSC_1050.webp',
    'images/DSC_1051.webp',
    'images/DSC_1052.webp',
    'images/DSC_1053.webp',
    'images/DSC_1054.webp',
    'images/DSC_1055.webp',
    'images/DSC_1056.webp',
    'images/DSC_1057.webp',
    'images/DSC_1058.webp',
    'images/DSC_1059.webp',
    'images/DSC_1060.webp',
    'images/DSC_1061.webp',
    'images/DSC_1062.webp',
    'images/DSC_1063.webp',
    'images/DSC_1064.webp',
    'images/DSC_1065.webp',
    'images/DSC_1066.webp',
    'images/DSC_1067.webp',
    'images/DSC_1068.webp',
    'images/DSC_1069.webp',
    'images/DSC_1070.webp',
    'images/DSC_1071.webp',
    'images/DSC_1072.webp',
    'images/DSC_1073.webp',
    'images/DSC_1074.webp',
    'images/DSC_1075.webp',
    'images/DSC_1076.webp',
    'images/DSC_1077.webp',
    'images/DSC_1078.webp',
    'images/DSC_1079.webp',
    'images/DSC_1080.webp',
    'images/DSC_1081.webp',
    'images/DSC_1082.webp',
    'images/DSC_1083.webp',
    'images/DSC_1084.webp',
    'images/DSC_1085.webp',
    'images/DSC_1086.webp',
    'images/DSC_1087.webp',
    'images/DSC_1088.webp',
    'images/DSC_1089.webp',
    'images/DSC_1090.webp',
    'images/DSC_1091.webp',
    'images/DSC_1092.webp',
    'images/DSC_1093.webp'
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
