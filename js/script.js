import "./byeie"; // loučíme se s IE

var colors = ['#b80058','#ebac23','#008cf9','#006e00','#00bbad','#d163e6','#b24502','#ff9287', '#5954d6', '#00c6f8', '#878500', '#00a76c', '#bdbdbd'];

var vysledek = ['Přítomen', 'Nepřítomen', 'Propadla', 'Zrušena', 'Dosud neproběhla'];

var celkem = [
  {y: 38, abs: 638},
  {y: 24.9, abs: 418},
  {y: 12.3, abs: 206},
  {y: 16.5, abs: 277},
  {y: 8.3, abs: 139}
];

var premier = [
  {y: 38.4, abs: 158},
  {y: 24.5, abs: 101},
  {y: 8.1, abs: 33},
  {y: 20.9, abs: 86},
  {y: 8.3, abs: 34}
];


var kdo = [174, 101, 71, 71, 54, 53, 53, 47, 39, 37, 36];

var koho = [412, 125, 120, 113, 104, 103, 102, 79, 70, 53, 52];

var pred = [16.7,22.1,19.2,27.5,38.3,50.9,54.4,38.0,44.2,61.6,24.3];

var abs = [47.1,44.2,36.5,33.3,24.5,20.8,15.5,13.9,12.4,9.6,5.7];

var prop = [14.7,12.5,19.2,15.0,8.0,20.8,11.7,16.5,11.5,7.2,10.0];

var zrus = [14.7,12.5,17.3,14.2,20.9,7.5,10.7,31.6,16.8,20.8,4.3];

var nezn = [6.9,8.7,7.7,10.0,8.3,0.0,7.8,0.0,15.0,0.8,55.7];

var absenteri;

if (screen.width < 420) {
    absenteri = ['Plaga, MŠMT', 'Hamáček, MZV', 'Toman, MZe.', 'Maláčová, MPSV', 'Babiš, premiér', 'Kremlík, MD', 'Brabec, MŽP', 'Ťok, MD', 'Schillerová, MF', 'Vojtěch, MZ', 'Havlíček, MP'];
} else if (screen.width < 600) {
    absenteri = ['Plaga, MŠMT (ANO)', 'Hamáček, MZV (ČSSD)', 'Toman, MZe. (ČSSD)', 'Maláčová, MPSV (ČSSD)', 'Babiš, premiér (ANO)', 'Kremlík, MD (ANO)', 'Brabec, MŽP (ANO)', 'Ťok, MD (ANO)', 'Schillerová, MF (ANO)', 'Vojtěch, MZ (ANO)', 'Havlíček, MP (ANO)'];
} else {
    absenteri = ['Robert Plaga, MŠMT (ANO)', 'Jan Hamáček, MZV (ČSSD)', 'Miroslav Toman, MZe. (ČSSD)', 'Jana Maláčová, MPSV (ČSSD)', 'Andrej Babiš, premiér (ANO)', 'Vladimír Kremlík, MD (ANO)', 'Richard Brabec, MŽP (ANO)', 'Dan Ťok, MD (ANO)', 'Alena Schillerová, MF (ANO)', 'Adam Vojtěch, MZ (ANO)', 'Karel Havlíček, MP (ANO)'];
}

var poslanci;

if (screen.width < 420) {
    poslanci = ['Kovářová (STAN)', 'Feri (TOP)', 'Michálek (Pir.)', 'Richterová (Pir.)', 'Munzar (ODS)', 'Maříková (SPD)', 'Jurečka (KDU)', 'Golasowská (KDU)', 'Kaňkovský (KDU)', 'Adamová (TOP)', 'Lanšádlová (TOP)'];
} else {
    poslanci = ['Kovářová (STAN)', 'Feri (TOP 09)', 'Michálek (Piráti)', 'Richterová (Piráti)', 'Munzar (ODS)', 'Maříková (SPD)', 'Jurečka (KDU-ČSL)', 'Golasowská (KDU-ČSL)', 'Kaňkovský (KDU-ČSL)', 'Adamová (TOP 09)', 'Lanšádlová (TOP 09)'];
}

// ['Věra Kovářová (STAN)', 'Dominik Feri (TOP 09)', 'Jakub Michálek (Piráti)', 'Olga Richterová (Piráti)', 'Vojtěch Munzar (ODS)', 'Karla Maříková (SPD)', 'Marian Jurečka (KDU-ČSL)', 'Pavla Golasowská (KDU-ČSL)', 'Vít Kaňkovský (KDU-ČSL)', 'Markéta P. Adamová (TOP 09)', 'Helena Lanšádlová (TOP 09)'];
var ministri;

if (screen.width < 420) {
    ministri = ['Babiš, premiér', 'Vojtěch, MZdr.', 'Maláčová, MPSV', 'Schillerová, MF', 'Hamáček, MZV', 'Brabec, MŽP', 'Plaga, MŠMT', 'Ťok, MD', 'Havlíček, MP', 'Kremlík, MD', 'Toman, MZe.'];
} else {
    ministri = ['Babiš, premiér (ANO)', 'Vojtěch, MZdr. (ANO)', 'Maláčová, MPSV (ČSSD)', 'Schillerová, MF (ANO)', 'Hamáček, MZV (ČSSD)', 'Brabec, MŽP (ANO)', 'Plaga, MŠMT (ANO)', 'Ťok, MD (ANO)', 'Havlíček, MP (ANO)', 'Kremlík, MD (ANO)', 'Toman, MZe. (ČSSD)'];
}

// ['Andrej Babiš, premiér (ANO)', 'Adam Vojtěch, MZdr. (ANO)', 'Jana Maláčová, MPSV (ČSSD)', 'Alena Schillerová, MF (ANO)', 'Jan Hamáček, MZV (ČSSD)', 'Richard Brabec, MŽP (ANO)', 'Robert Plaga, MŠMT (ANO)', 'Dan Ťok, MD (ANO)', 'Karel Havlíček, MP (ANO)', 'Vladimír Kremlík, MD (ANO)', 'Miroslav Toman, MZe. (ČSSD)'];



var kdoskym =
[
  [1,1,0],
  [2,2,0],
  [3,3,0],
  [4,4,0],
  [5,5,0],
  [6,6,0],
  [7,7,0],
  [8,8,0],
  [9,9,0],
  [10,1,38],
  [10,2,26],
  [11,1,24],
  [12,3,22],
  [13,1,22],
  [14,1,21],
  [15,4,21],
  [12,1,19],
  [16,5,18],
  [17,3,17],
  [18,6,16],
  [10,4,16],
  [19,7,15],
  [18,1,14],
  [20,1,14],
  [21,1,13],
  [12,4,13],
  [22,1,12],
  [23,1,12],
  [10,8,12],
  [24,1,11],
  [11,6,11],
  [25,2,11],
  [26,1,10],
  [27,1,10],
  [28,1,10],
  [22,9,10],
  [29,4,10]
];

var uzle = [
{
    "id": 1,
    "short": "Babiš",
    "name": "Andrej Babiš"
},
{
    "id": 2,
    "short": "Schillerová",
    "name": "Alena Schillerová"
},
{
    "id": 3,
    "short": "Maláčová",
    "name": "Jana Maláčová"
},
{
    "id": 4,
    "short": "Vojtěch",
    "name": "Adam Vojtěch"
},
{
    "id": 5,
    "short": "Brabec",
    "name": "Richard Brabec"
},
{
    "id": 6,
    "short": "Ťok",
    "name": "Dan Ťok"
},
{
    "id": 7,
    "short": "Plaga",
    "name": "Robert Plaga"
},
{
    "id": 8,
    "short": "Hamáček",
    "name": "Jan Hamáček"
},
{
    "id": 9,
    "short": "Havlíček",
    "name": "Karel Havlíček"
},
{
    "id": 10,
    "short": "Kovářová",
    "name": "Věra Kovářová"
},
{
    "id": 11,
    "short": "Feri",
    "name": "Dominik Feri"
},
{
    "id": 12,
    "short": "Richterová",
    "name": "Olga Richterová"
},
{
    "id": 13,
    "short": "Langšádlová",
    "name": "Helena Langšádlová"
},
{
    "id": 14,
    "short": "Michálek",
    "name": "Jakub Michálek"
},
{
    "id": 15,
    "short": "Kaňkovský",
    "name": "Vít Kaňkovský"
},
{
    "id": 16,
    "short": "Balcarová",
    "name": "Dana Balcarová"
},
{
    "id": 17,
    "short": "Golasowská",
    "name": "Pavla Golasowská"
},
{
    "id": 18,
    "short": "Jurečka",
    "name": "Marian Jurečka"
},
{
    "id": 19,
    "short": "Bartoň",
    "name": "Lukáš Bartoň"
},
{
    "id": 20,
    "short": "Adamová",
    "name": "Markéta Pekarová Adamová"
},
{
    "id": 21,
    "short": "Valenta",
    "name": "Jiří Valenta"
},
{
    "id": 22,
    "short": "Munzar",
    "name": "Vojtěch Munzar"
},
{
    "id": 23,
    "short": "Fiala",
    "name": "Petr Fiala"
},
{
    "id": 24,
    "short": "Kupka",
    "name": "Martin Kupka"
},
{
    "id": 25,
    "short": "Ferjenčík",
    "name": "Mikuláš Ferjenčík"
},
{
    "id": 26,
    "short": "Bartoš",
    "name": "Ivan Bartoš"
},
{
    "id": 27,
    "short": "Blaha",
    "name": "Stanislav Blaha"
},
{
    "id": 28,
    "short": "Maříková",
    "name": "Karla Maříková"
},
{
    "id": 29,
    "short": "Třešňák",
    "name": "Petr Třešňák"
}
]

var share = [190, 30, 40, 48, 16, 26, 16, 14, 14, 80, 30, 44, 22, 21, 21, 18, 17, 28, 15, 16, 15, 20, 14, 12, 12, 12, 12, 12, 14];

// [230, 37, 39, 60, 18, 27, 15, 12, 10, 92, 35, 54, 22, 21, 21, 18, 17, 30, 15, 14, 13, 22, 12, 11, 11, 10, 10, 10, 10];

Highcharts.chart('celkem', {
    chart: {
        type: 'column'
    },

    title: {
        text: 'Ústní interpelace na vládu A. Babiše'
    },

    subtitle: {
        text: 'celkem × premiér'
    },

    xAxis: {
        categories: vysledek
    },

    yAxis: {
        title: {
            text: 'podíl na interpelacích'
        },
        labels: {
            formatter: function () {
                return this.value + ' %';
            }
        }
    },

    tooltip: {
        formatter: function () {
            return '<span style="font-size: 10px">' + this.x + '</span><br/>' +
                   '<b>' + this.y + ' % / ' + this.point.abs + ' </b> interpelací'
        }
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: 'https://www.psp.cz/sqw/interp.sqw?o=8',
        text: 'Zdroj: PS PČR'
    },

    series: [{
        name: 'vláda',
        data: celkem,
        color: colors[7]
    }, {
        name: 'premiér',
        data: premier,
        color: colors[4]
    }]
});

Highcharts.chart('kdo', {
    chart: {
        type: 'bar'
    },

    title: {
        text: 'Kdo se ptá?'
    },

    xAxis: {
        categories: poslanci
    },

    yAxis: {
        title: {
            text: ''
        }
    },

    tooltip: {
        formatter: function () {
            return '<span style="font-size: 10px">' + this.x + '</span><br/>' +
                   '<b>' + this.y + ' </b> interpelací'
        }
    },

    exporting: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'kdo',
        data: kdo,
        color: colors[7]
    }]
});

Highcharts.chart('koho', {
    chart: {
        type: 'bar'
    },

    title: {
        text: 'Kdo odpovídá?'
    },

    xAxis: {
        categories: ministri
    },

    yAxis: {
        title: {
            text: ''
        }
    },

    tooltip: {
        formatter: function () {
            return '<span style="font-size: 10px">' + this.x + '</span><br/>' +
                   '<b>' + this.y + ' </b> odpovědí'
        }
    },

    exporting: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'koho',
        data: koho,
        color: colors[4]
    }]
});

Highcharts.chart('absence', {
    chart: {
        type: 'bar'
    },

    title: {
        text: 'Účast na interpelacích'
    },

    subtitle: {
        useHTML: true,
        text: '<p>ministři s nejméně 50 dotazy</p><p>období od 1/2019 do 2/2020</p>'
    },

    xAxis: {
        categories: absenteri
    },

    yAxis: {
        title: {
            text: 'podíl interpelací'
        },
        labels: {
            formatter: function () {
                return this.value + ' %';
            }
        }
    },

    tooltip: {
        valueSuffix: ' %',
        shared: true
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: 'https://www.psp.cz/sqw/interp.sqw?o=8',
        text: 'Zdroj: PS PČR'
    },

    series: [{
        name: vysledek[0],
        data: pred,
        color: colors[3],
        visible: false
    }, {
        name: vysledek[1],
        data: abs,
        color: colors[0]
    }, {
        name: vysledek[2],
        data: prop,
        color: colors[1],
        visible: false
    }, {
        name: vysledek[3],
        data: zrus,
        color: colors[4],
        visible: false
    }, {
        name: vysledek[4],
        data: nezn,
        color: colors[7],
        visible: false
    }]
});

Highcharts.setOptions({
  colors: ['#000', '#111', '#222', '#333', '#444', '#555', '#666', '#777', '#888', '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#e6194b', '#3cb44b']
});

Highcharts.chart('kdoskym', {

    title: {
        text: 'Duely'
    },

    subtitle: {
        useHTML: true,
        text: '<p>poslanci s nejméně 10 interpelacemi na jednoho ministra</p><p>poslanci barevně, ministři odstíny šedi</p>'
    },


    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. From {point.from} to {point.to}: {point.weight}.'
        }
    },

    tooltip: {
        nodeFormat: '{point.name}<br/>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        href: 'https://www.psp.cz/sqw/interp.sqw?o=8',
        text: 'Zdroj: PS PČR'
    },

    series: [{
        size: '70%',
        keys: ['from', 'to', 'weight'],
        data: kdoskym,
        nodes: uzle,
        type: 'dependencywheel',
        name: 'Duely',
        dataLabels: {
            enabled: false
        },

    }, {

        type: 'pie',
        size: '70%',
        tooltip: {
            headerFormat: '<span style="font-size: 10px">Duely</span><br/>',
            pointFormat: '{point.name}<br/>'
        },
        data: [{
            y: share[0],
            name: uzle[0].short,
        }, {
            y: share[1],
            name: uzle[1].short,
        }, {
            y: share[2],
            name: uzle[2].short,
        }, {
            y: share[3],
            name: uzle[3].short,
        }, {
            y: share[4],
            name: uzle[4].short,
        }, {
            y: share[5],
            name: uzle[5].short,
        }, {
            y: share[6],
            name: uzle[6].short,
        }, {
            y: share[7],
            name: uzle[7].short,
        }, {
            y: share[8],
            name: uzle[8].short,
        }, {
            y: share[9],
            name: uzle[9].short,
        }, {
            y: share[10],
            name: uzle[10].short,
        }, {
            y: share[11],
            name: uzle[11].short,
        }, {
            y: share[12],
            name: uzle[12].short,
        }, {
            y: share[13],
            name: uzle[13].short,
        }, {
            y: share[14],
            name: uzle[14].short,
        }, {
            y: share[15],
            name: uzle[15].short,
        }, {
            y: share[16],
            name: uzle[16].short,
        }, {
            y: share[17],
            name: uzle[17].short,
        }, {
            y: share[18],
            name: uzle[18].short,
        }, {
            y: share[19],
            name: uzle[19].short,
        }, {
            y: share[20],
            name: uzle[20].short,
        }, {
            y: share[21],
            name: uzle[21].short,
        }, {
            y: share[22],
            name: uzle[22].short,
        }, {
            y: share[23],
            name: uzle[23].short,
        }, {
            y: share[24],
            name: uzle[24].short,
        }, {
            y: share[25],
            name: uzle[25].short,
        }, {
            y: share[26],
            name: uzle[26].short,
        }, {
            y: share[27],
            name: uzle[27].short,
        }, {
            y: share[28],
            name: uzle[28].short,
        }],
        colors: ['none'],
        borderWidth: 0,
        dataLabels: {
            connectorWidth: 0.5,
            alignTo: 'plotEdges',
            format: '{point.name}',
            connectorColor: '#333'
        }
    }]

});