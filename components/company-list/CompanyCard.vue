<template>
    <div class="company-card">
        <header>
            <img :src="props.company.img" alt="" class="company-logo" />
            <h1>{{ props.company.name }}</h1>
        </header>
        <div>
            <p>Revenue {{ quarter }} </p>
        </div>
    </div>
</template>

<script setup lang="ts">

interface Company {
    name: string,
    img: string,
    data: any[],
}

const props = defineProps<{ company: Company }>();
let quarter: string;

watchEffect(() => {
    if (props.company.data) {

        if (props.company.name === 'Microsoft') {
            const processedData = computed(() => {
                return Object.values(props.company.data[1] ?? {}) as string[]; // Konvertiert das Objekt in ein Array
            });
            quarter = getHighestQuarterMicrosoft(processedData.value);
        } else {
            const processedData = computed(() => {
                return Object.values(props.company.data[1] ?? {}) as string[]; // Konvertiert das Objekt in ein Array
            });
            quarter = getHighestQuarter(processedData.value);
        }
    }
});

function getHighestQuarterMicrosoft(data: string[]): string {
    return data
        .map(entry => {
            const match = entry.match(/Q(\d)-(\d{2,4})/); // Extrahiert Quartal & Jahr
            if (match) {
                const quarter = parseInt(match[1], 10); // Quartalszahl (1-4)
                const year = parseInt(match[2], 10); // Jahr
                return { entry, year, quarter };
            }
            return null;
        })
        .filter(item => item !== null) // Entfernt ungültige Werte
        .sort((a, b) => b!.year - a!.year || b!.quarter - a!.quarter) // Sortierung nach Jahr & Quartal
        .map(item => item!.entry)[0]; // Höchstes Quartal zurückgeben
}

function getHighestQuarter(data: string[]): any {
    return data
        .map(entry => {
            // Jahreszahl und Quartal auslesen
            const match = entry.match(/(\d{2,4})Q?(\d)/);
            if (match) {
                const year = parseInt(match[1], 10);
                const quarter = parseInt(match[2], 10);
                return { entry, year, quarter };
            }
            return null;
        })
        .filter(item => item !== null) // Nur gültige Einträge behalten
        .sort((a, b) => b!.year - a!.year || b!.quarter - a!.quarter) // Sortieren
        .map(item => item!.entry)[0]; // Höchsten Eintrag zurückgeben
}



</script>

<style scoped>
.company-card {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px 24px;
    gap: 8px;
    border-radius: 16px;
    opacity: 0px;
    background-color: #011F35;
}

h1 {
    font-size: 20px;
    font-weight: 500;
}

header {
    display: flex;
    align-items: center;
    gap: 8px;
}

.company-logo {
    width: 20px;
    height: 20px;
    object-fit: cover;
}
</style>