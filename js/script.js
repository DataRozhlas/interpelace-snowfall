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
        text: '<p>ministři s nejméně 50 dotazy</p><p>období od 1/2018 do 2/2020</p>'
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
        color: colors[3]
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

var datatablica = [
  ["Věra Kovářová","Andrej Babiš",38],
  ["Věra Kovářová","Alena Schillerová",26],
  ["Dominik Feri","Andrej Babiš",24],
  ["Olga Richterová","Jana Maláčová",22],
  ["Helena Langšádlová","Andrej Babiš",22],
  ["Jakub Michálek","Andrej Babiš",21],
  ["Vít Kaňkovský","Adam Vojtěch",21],
  ["Olga Richterová","Andrej Babiš",19],
  ["Dana Balcarová","Richard Brabec",18],
  ["Pavla Golasowská","Jana Maláčová",17],
  ["Marian Jurečka","Dan Ťok",16],
  ["Věra Kovářová","Adam Vojtěch",16],
  ["Lukáš Bartoň","Robert Plaga",15],
  ["Marian Jurečka","Andrej Babiš",14],
  ["Markéta Pekarová Adamová","Andrej Babiš",14],
  ["Jiří Valenta","Andrej Babiš",13],
  ["Olga Richterová","Adam Vojtěch",13],
  ["Vojtěch Munzar","Andrej Babiš",12],
  ["Petr Fiala","Andrej Babiš",12],
  ["Věra Kovářová","Jan Hamáček",12],
  ["Martin Kupka","Andrej Babiš",11],
  ["Dominik Feri","Dan Ťok",11],
  ["Mikuláš Ferjenčík","Alena Schillerová",11],
  ["Ivan Bartoš","Andrej Babiš",10],
  ["Stanislav Blaha","Andrej Babiš",10],
  ["Karla Maříková","Andrej Babiš",10],
  ["Vojtěch Munzar","Karel Havlíček",10],
  ["Petr Třešňák","Adam Vojtěch",10],
  ["Vít Rakušan","Andrej Babiš",9],
  ["Věra Kovářová","Dan Ťok",9],
  ["Jakub Michálek","Marie Benešová",9],
  ["Dominik Feri","Marie Benešová",9],
  ["Jan Zahradník","Richard Brabec",9],
  ["Dominik Feri","Richard Brabec",9],
  ["Marek Výborný","Andrej Babiš",8],
  ["Karla Maříková","Miroslav Toman",8],
  ["Dominik Feri","Robert Plaga",8],
  ["Václav Klaus","Robert Plaga",8],
  ["Dominik Feri","Jan Hamáček",8],
  ["Věra Kovářová","Vladimír Kremlík",8],
  ["Karla Maříková","Adam Vojtěch",8],
  ["Věra Kovářová","Lubomír Metnar",8],
  ["Jan Zahradník","Andrej Babiš",7],
  ["Jakub Michálek","Klára Dostálová",7],
  ["Vojtěch Munzar","Alena Schillerová",7],
  ["Dominik Feri","Jan Kněžínek",7],
  ["Pavla Golasowská","Adam Vojtěch",7],
  ["Vít Kaňkovský","Jana Maláčová",6],
  ["Martin Kolovratník","Jana Maláčová",6],
  ["Věra Kovářová","Jana Maláčová",6],
  ["Věra Kovářová","Antonín Staněk",6],
  ["František Kopřiva","Andrej Babiš",6],
  ["Jan Lipavský","Andrej Babiš",6],
  ["Olga Richterová","Jaroslava Němcová",6],
  ["Věra Kovářová","Klára Dostálová",6],
  ["Marian Jurečka","Marta Nováková",6],
  ["Pavla Golasowská","Robert Plaga",6],
  ["Pavel Jelínek","Robert Plaga",6],
  ["Jakub Janda","Robert Plaga",6],
  ["Jakub Michálek","Jan Hamáček",6],
  ["Jakub Michálek","Alena Schillerová",6],
  ["Vlastimil Válek","Adam Vojtěch",6],
  ["Karel Rais","Jana Maláčová",5],
  ["Helena Langšádlová","Jana Maláčová",5],
  ["Dominik Feri","Jana Maláčová",5],
  ["Jakub Janda","Andrej Babiš",5],
  ["Lucie Šafránková","Andrej Babiš",5],
  ["Ondřej Polanský","Andrej Babiš",5],
  ["Lukáš Bartoň","Andrej Babiš",5],
  ["Ivan Adamec","Dan Ťok",5],
  ["Ondřej Polanský","Dan Ťok",5],
  ["Karla Maříková","Karel Havlíček",5],
  ["Petr Bendl","Karel Havlíček",5],
  ["Věra Kovářová","Karel Havlíček",5],
  ["Vojtěch Munzar","Klára Dostálová",5],
  ["Věra Kovářová","Marta Nováková",5],
  ["Veronika Vrecionová","Miroslav Toman",5],
  ["Věra Kovářová","Robert Plaga",5],
  ["Marek Výborný","Robert Plaga",5],
  ["Kateřina Valachová","Robert Plaga",5],
  ["Marian Jurečka","Jan Hamáček",5],
  ["Ondřej Profant","Jan Hamáček",5],
  ["Věra Procházková","Alena Schillerová",5],
  ["Karla Maříková","Alena Schillerová",5],
  ["Tomáš Martínek","Alena Schillerová",5],
  ["Jakub Michálek","Jan Kněžínek",5],
  ["Ondřej Polanský","Vladimír Kremlík",5],
  ["Jana Krutáková","Richard Brabec",5],
  ["Petr Bendl","Richard Brabec",5],
  ["Věra Kovářová","Tomáš Petříček",5],
  ["Jan Čižinský","Andrej Babiš",4],
  ["Petr Dolínek","Andrej Babiš",4],
  ["Vít Kaňkovský","Andrej Babiš",4],
  ["Pavel Jelínek","Andrej Babiš",4],
  ["Lukáš Černohorský","Andrej Babiš",4],
  ["Radek Holomčík","Andrej Babiš",4],
  ["Ing. et Leo Luzar","Andrej Babiš",4],
  ["Lukáš Kolářík","Andrej Babiš",4],
  ["Veronika Vrecionová","Andrej Babiš",4],
  ["Pavla Golasowská","Jaroslava Němcová",4],
  ["Lukáš Černohorský","Karel Havlíček",4],
  ["Olga Richterová","Klára Dostálová",4],
  ["Jan Zahradník","Miroslav Toman",4],
  ["Jana Krutáková","Miroslav Toman",4],
  ["Jaroslav Martinů","Miroslav Toman",4],
  ["Zdeněk Podal","Miroslav Toman",4],
  ["Zuzana Majerová Zahradníková","Robert Plaga",4],
  ["Jan Zahradník","Tomáš Hüner",4],
  ["Václav Klaus","Jan Hamáček",4],
  ["Karla Maříková","Jan Hamáček",4],
  ["Lukáš Černohorský","Alena Schillerová",4],
  ["Pavla Golasowská","Jan Kněžínek",4],
  ["Stanislav Blaha","Vladimír Kremlík",4],
  ["Jana Krutáková","Vladimír Kremlík",4],
  ["Dominik Feri"," Taťána Malá",4],
  ["Karla Maříková","Richard Brabec",4],
  ["Jan Čižinský","Richard Brabec",4],
  ["Radek Holomčík","Richard Brabec",4],
  ["Zdeněk Podal","Richard Brabec",4],
  ["Marek Výborný","Jana Maláčová",3],
  ["Petr Beitl","Jana Maláčová",3],
  ["Zuzana Majerová Zahradníková","Jana Maláčová",3],
  ["Petr Třešňák","Jana Maláčová",3],
  ["Markéta Pekarová Adamová","Jana Maláčová",3],
  ["Vojtěch Munzar","Jana Maláčová",3],
  ["Lukáš Černohorský","Antonín Staněk",3],
  ["Monika Jarošová","Andrej Babiš",3],
  ["Mikuláš Ferjenčík","Andrej Babiš",3],
  ["Vlastimil Válek","Andrej Babiš",3],
  ["Zuzana Majerová Zahradníková","Andrej Babiš",3],
  ["Petr Dolínek","Dan Ťok",3],
  ["Vojtěch Munzar","Dan Ťok",3],
  ["Stanislav Blaha","Dan Ťok",3],
  ["Karla Maříková","Jiří Milek",3],
  ["Tomáš Martínek","Karel Havlíček",3],
  ["Jan Zahradník","Karel Havlíček",3],
  ["Ondřej Polanský","Karel Havlíček",3],
  ["Petr Třešňák","Karel Havlíček",3],
  ["Dominik Feri","Klára Dostálová",3],
  ["Petr Třešňák","Marta Nováková",3],
  ["Petr Bendl","Miroslav Toman",3],
  ["Věra Kovářová","Miroslav Toman",3],
  ["Jakub Janda","Jan Hamáček",3],
  ["Pavel Jelínek","Jan Hamáček",3],
  ["Vojtěch Munzar","Jan Hamáček",3],
  ["Markéta Pekarová Adamová","Alena Schillerová",3],
  ["Ing. et Jan Skopeček","Alena Schillerová",3],
  ["Věra Kovářová","Jan Kněžínek",3],
  ["Jakub Michálek","Vladimír Kremlík",3],
  ["Dominik Feri","Vladimír Kremlík",3],
  ["Martin Kupka","Vladimír Kremlík",3],
  ["Ondřej Profant","Vladimír Kremlík",3],
  ["Marian Jurečka","Adam Vojtěch",3],
  ["Martin Kupka","Adam Vojtěch",3],
  ["Tomáš Vymazal","Adam Vojtěch",3],
  ["Markéta Pekarová Adamová","Lubomír Metnar",3],
  ["František Elfmark","Richard Brabec",3],
  ["Jakub Michálek","Richard Brabec",3],
  ["Lukáš Černohorský","Richard Brabec",3],
  ["Petr Pávek","Richard Brabec",3],
  ["Věra Kovářová","Richard Brabec",3],
  ["Miloslav Janulík","Tomáš Petříček",3],
  ["Jan Lipavský","Tomáš Petříček",3],
  ["Věra Kovářová","Lubomír Zaorálek",3],
  ["Jana Mračková Vildumetzová","Jana Maláčová",2],
  ["Petr Bendl","Jana Maláčová",2],
  ["Aleš Juchelka","Jana Maláčová",2],
  ["Jaroslav Kytýr","Jana Maláčová",2],
  ["Marian Jurečka","Jana Maláčová",2],
  ["Martin Baxa","Antonín Staněk",2],
  ["Jiří Valenta","Antonín Staněk",2],
  ["Lenka Kozlová","Antonín Staněk",2],
  ["Martin Kolovratník","Antonín Staněk",2],
  ["Mikuláš Peksa","Andrej Babiš",2],
  ["Dana Balcarová","Andrej Babiš",2],
  ["Miloslav Janulík","Andrej Babiš",2],
  ["Tomáš Martínek","Andrej Babiš",2],
  ["Petr Bendl","Andrej Babiš",2],
  ["Václav Votava","Andrej Babiš",2],
  ["Kamal Farhan","Andrej Babiš",2],
  ["Ivan Adamec","Andrej Babiš",2],
  ["PaedDr. Alena Gajdůšková","Andrej Babiš",2],
  ["Kateřina Valachová","Andrej Babiš",2],
  ["Pavel Růžička","Andrej Babiš",2],
  ["Martin Baxa","Andrej Babiš",2],
  ["Radek Koten","Andrej Babiš",2],
  ["Ing. et Jan Skopeček","Andrej Babiš",2],
  ["Marie Pěnčíková","Andrej Babiš",2],
  ["Dana Balcarová","Dan Ťok",2],
  ["Radek Koten","Dan Ťok",2],
  ["Jakub Michálek","Dan Ťok",2],
  ["Jan Zahradník","Dan Ťok",2],
  ["Jan Farský","Dan Ťok",2],
  ["Jana Krutáková","Dan Ťok",2],
  ["Jan Bartošek","Dan Ťok",2],
  ["Jan Čižinský","Jaroslava Němcová",2],
  ["Jan Bauer","Jaroslava Němcová",2],
  ["Petr Dolínek","Jaroslava Němcová",2],
  ["Vít Rakušan","Jaroslava Němcová",2],
  ["Vít Kaňkovský","Jiří Milek",2],
  ["Markéta Pekarová Adamová","Jiří Milek",2],
  ["Marek Výborný","Karel Havlíček",2],
  ["Petr Beitl","Karel Havlíček",2],
  ["Zdeněk Podal","Karel Havlíček",2],
  ["Martin Kupka","Karel Havlíček",2],
  ["Ivan Adamec","Karel Havlíček",2],
  ["Martin Jiránek","Karel Havlíček",2],
  ["Pavel Jelínek","Karel Havlíček",2],
  ["Radek Koten","Karel Havlíček",2],
  ["Stanislav Blaha","Karel Havlíček",2],
  ["Jakub Janda","Karel Havlíček",2],
  ["Dominik Feri","Karla Šlechtová",2],
  ["Věra Kovářová","Karla Šlechtová",2],
  ["Helena Langšádlová","Klára Dostálová",2],
  ["Marcela Melková","Klára Dostálová",2],
  ["František Navrkal","Klára Dostálová",2],
  ["Vít Rakušan","Klára Dostálová",2],
  ["Ondřej Profant","Klára Dostálová",2],
  ["Jakub Janda","Klára Dostálová",2],
  ["Lukáš Bartoň","Marta Nováková",2],
  ["Vojtěch Munzar","Marta Nováková",2],
  ["Jakub Michálek","Marta Nováková",2],
  ["Vít Kaňkovský","Marta Nováková",2],
  ["Radek Koten","Marta Nováková",2],
  ["Markéta Pekarová Adamová","Miroslav Toman",2],
  ["Dana Balcarová","Miroslav Toman",2],
  ["Stanislav Blaha","Miroslav Toman",2],
  ["Radek Holomčík","Robert Plaga",2],
  ["František Navrkal","Robert Plaga",2],
  ["Vlastimil Válek","Robert Plaga",2],
  ["Jakub Michálek","Robert Plaga",2],
  ["Zdeněk Podal","Robert Plaga",2],
  ["Hana Aulická Jírovcová","Tomáš Hüner",2],
  ["Lukáš Kolářík","Jan Hamáček",2],
  ["Monika Jarošová","Jan Hamáček",2],
  ["Lukáš Bartoň","Jan Hamáček",2],
  ["Petr Bendl","Jan Hamáček",2],
  ["Radek Rozvoral","Jan Hamáček",2],
  ["Petr Pávek","Jan Hamáček",2],
  ["Marek Výborný","Jan Hamáček",2],
  ["František Kopřiva","Jan Hamáček",2],
  ["Vít Rakušan","Jan Hamáček",2],
  ["Tomáš Vymazal","Jan Hamáček",2],
  ["Lukáš Černohorský","Jan Hamáček",2],
  ["Jan Lipavský","Jan Hamáček",2],
  ["Jan Zahradník","Jan Hamáček",2],
  ["Jiří Kohoutek","Jan Hamáček",2],
  ["Adam Kalous","Jan Hamáček",2],
  ["Ondřej Profant","Alena Schillerová",2],
  ["Marek Výborný","Alena Schillerová",2],
  ["Olga Richterová","Alena Schillerová",2],
  ["Radek Holomčík","Alena Schillerová",2],
  ["Petr Pávek","Alena Schillerová",2],
  ["Miroslav Kalousek","Alena Schillerová",2],
  ["Dana Balcarová","Alena Schillerová",2],
  ["Jakub Janda","Alena Schillerová",2],
  ["Václav Votava","Alena Schillerová",2],
  ["Veronika Vrecionová","Alena Schillerová",2],
  ["Ondřej Profant","Jan Kněžínek",2],
  ["Jan Farský","Jan Kněžínek",2],
  ["Pavla Golasowská","Robert Pelikán",2],
  ["Jan Chvojka","Robert Pelikán",2],
  ["Ivan Adamec","Vladimír Kremlík",2],
  ["Marian Jurečka","Vladimír Kremlík",2],
  ["Roman Kubíček","Vladimír Kremlík",2],
  ["Vojtěch Munzar","Vladimír Kremlík",2],
  ["Pavel Jelínek","Adam Vojtěch",2],
  ["Marek Výborný","Adam Vojtěch",2],
  ["Petr Bendl","Adam Vojtěch",2],
  ["Lukáš Bartoň","Adam Vojtěch",2],
  ["Monika Jarošová","Adam Vojtěch",2],
  ["Markéta Pekarová Adamová","Adam Vojtěch",2],
  ["Marian Bojko","Adam Vojtěch",2],
  ["Jakub Michálek"," Taťána Malá",2],
  ["Dominik Feri","Lubomír Metnar",2],
  ["Petr Pávek","Lubomír Metnar",2],
  ["Pavel Růžička","Lubomír Metnar",2],
  ["Ing. et Leo Luzar","Lubomír Metnar",2],
  ["Marek Výborný","Lubomír Metnar",2],
  ["Jan Čižinský","Lubomír Metnar",2],
  ["Jana Černochová","Lubomír Metnar",2],
  ["Karel Krejza","Lubomír Metnar",2],
  ["Miroslav Kalousek","Lubomír Metnar",2],
  ["Martin Kupka","Lubomír Metnar",2],
  ["Věra Kovářová","Marie Benešová",2],
  ["Olga Richterová","Marie Benešová",2],
  ["Jan Farský","Marie Benešová",2],
  ["Markéta Pekarová Adamová","Richard Brabec",2],
  ["Pavla Golasowská","Richard Brabec",2],
  ["Monika Jarošová","Richard Brabec",2],
  ["Marian Jurečka","Richard Brabec",2],
  ["Jiří Kohoutek","Richard Brabec",2],
  ["Vojtěch Munzar","Richard Brabec",2],
  ["Martin Kolovratník","Tomáš Petříček",2],
  ["Karla Maříková","Tomáš Petříček",2],
  ["Jiří Valenta","Tomáš Petříček",2],
  ["Dominik Feri","Ilja Šmíd",2],
  ["Pavla Golasowská","Lubomír Zaorálek",2],
  ["Barbora Kořanová","Lubomír Zaorálek",2],
  ["Jan Čižinský","Jana Maláčová",1],
  ["Vít Rakušan","Jana Maláčová",1],
  ["Lubomír Volný","Jana Maláčová",1],
  ["Josef Bělica","Jana Maláčová",1],
  ["Ivana Nevludová","Jana Maláčová",1],
  ["Marek Novák","Jana Maláčová",1],
  ["Jan Bauer","Jana Maláčová",1],
  ["Miloslav Janulík","Jana Maláčová",1],
  ["Radek Koten","Jana Maláčová",1],
  ["Pavel Plzák","Jana Maláčová",1],
  ["Monika Jarošová","Jana Maláčová",1],
  ["Milan Pour","Jana Maláčová",1],
  ["Stanislav Blaha","Jana Maláčová",1],
  ["Věra Procházková","Jana Maláčová",1],
  ["Jakub Michálek","Jana Maláčová",1],
  ["Hana Aulická Jírovcová","Jana Maláčová",1],
  ["Barbora Kořanová","Jana Maláčová",1],
  ["Petr Pávek","Jana Maláčová",1],
  ["Ilona Mauritzová","Jana Maláčová",1],
  ["Andrea Brzobohatá","Jana Maláčová",1],
  ["Markéta Pekarová Adamová","Antonín Staněk",1],
  ["Pavla Golasowská","Antonín Staněk",1],
  ["Jakub Michálek","Antonín Staněk",1],
  ["Ondřej Polanský","Antonín Staněk",1],
  ["Mikuláš Peksa","Antonín Staněk",1],
  ["Pavel Jelínek","Antonín Staněk",1],
  ["Tomáš Martínek","Antonín Staněk",1],
  ["Jakub Janda","Antonín Staněk",1],
  ["Monika Červíčková","Andrej Babiš",1],
  ["Tomáš Kohoutek","Andrej Babiš",1],
  ["Zdeněk Ondráček","Andrej Babiš",1],
  ["Lenka Kozlová","Andrej Babiš",1],
  ["Miroslav Kalousek","Andrej Babiš",1],
  ["Květa Matušovská","Andrej Babiš",1],
  ["Jaroslav Holík","Andrej Babiš",1],
  ["Jan Richter","Andrej Babiš",1],
  ["Radek Rozvoral","Andrej Babiš",1],
  ["Vojtěch Pikal","Andrej Babiš",1],
  ["Martin Kolovratník","Andrej Babiš",1],
  ["Taťána Malá","Andrej Babiš",1],
  ["Jan Kubík","Andrej Babiš",1],
  ["Iva Kalátová","Andrej Babiš",1],
  ["Jana Krutáková","Andrej Babiš",1],
  ["Hana Aulická Jírovcová","Andrej Babiš",1],
  ["Lubomír Zaorálek","Andrej Babiš",1],
  ["Ivo Pojezný","Andrej Babiš",1],
  ["Přemysl Mališ","Andrej Babiš",1],
  ["František Elfmark","Andrej Babiš",1],
  ["Robert Králíček","Andrej Babiš",1],
  ["Jan Farský","Andrej Babiš",1],
  ["Václav Klaus","Andrej Babiš",1],
  ["Jana Černochová","Andrej Babiš",1],
  ["Milan Hnilička","Andrej Babiš",1],
  ["Jiří Mihola","Andrej Babiš",1],
  ["Jiří Mašek","Andrej Babiš",1],
  ["Radim Fiala","Andrej Babiš",1],
  ["Zuzana Ožanová","Andrej Babiš",1],
  ["Lubomír Volný","Andrej Babiš",1],
  ["Ondřej Profant","Andrej Babiš",1],
  ["Radek Zlesák","Andrej Babiš",1],
  ["František Navrkal","Andrej Babiš",1],
  ["Roman Kubíček","Andrej Babiš",1],
  ["Pavel Juříček","Andrej Babiš",1],
  ["Jan Bartošek","Andrej Babiš",1],
  ["Tomáš Vymazal","Andrej Babiš",1],
  ["Jan Bauer","Andrej Babiš",1],
  ["Petr Pávek","Andrej Babiš",1],
  ["Miloslava Rutová","Andrej Babiš",1],
  ["Vojtěch Filip","Andrej Babiš",1],
  ["Petr Gazdík","Andrej Babiš",1],
  ["Petr Třešňák","Andrej Babiš",1],
  ["Martin Jiránek","Andrej Babiš",1],
  ["Josef Kott","Andrej Babiš",1],
  ["Stanislav Berkovec","Andrej Babiš",1],
  ["Jiří Kohoutek","Andrej Babiš",1],
  ["Jan Chvojka","Andrej Babiš",1],
  ["Miroslav Kalousek","Dan Ťok",1],
  ["Jiří Ventruba","Dan Ťok",1],
  ["Vít Rakušan","Dan Ťok",1],
  ["Miloslava Vostrá","Dan Ťok",1],
  ["Ondřej Profant","Dan Ťok",1],
  ["Pavel Jelínek","Dan Ťok",1],
  ["Patrik Nacher","Dan Ťok",1],
  ["Petr Gazdík","Dan Ťok",1],
  ["Helena Langšádlová","Dan Ťok",1],
  ["Zdeněk Podal","Dan Ťok",1],
  ["Ondřej Veselý","Jaroslava Němcová",1],
  ["Mikuláš Peksa","Jaroslava Němcová",1],
  ["Jan Farský","Jaroslava Němcová",1],
  ["Dana Balcarová","Jaroslava Němcová",1],
  ["Tereza Hyťhová","Jaroslava Němcová",1],
  ["Jana Krutáková","Jaroslava Němcová",1],
  ["Lukáš Kolářík","Jaroslava Němcová",1],
  ["Markéta Pekarová Adamová","Jaroslava Němcová",1],
  ["Miroslav Kalousek","Jaroslava Němcová",1],
  ["Vlastimil Válek","Jiří Milek",1],
  ["Václav Klaus","Jiří Milek",1],
  ["Jana Krutáková","Jiří Milek",1],
  ["Veronika Vrecionová","Jiří Milek",1],
  ["Markéta Pekarová Adamová","Karel Havlíček",1],
  ["Ondřej Profant","Karel Havlíček",1],
  ["Vít Kaňkovský","Karel Havlíček",1],
  ["Bohuslav Svoboda","Karel Havlíček",1],
  ["Jiří Valenta","Karel Havlíček",1],
  ["Martin Baxa","Karel Havlíček",1],
  ["Jan Čižinský","Karel Havlíček",1],
  ["František Kopřiva","Karel Havlíček",1],
  ["Jiří Kohoutek","Karel Havlíček",1],
  ["Pavel Jelínek","Karla Šlechtová",1],
  ["Kateřina Valachová","Klára Dostálová",1],
  ["Marian Jurečka","Klára Dostálová",1],
  ["Martin Kupka","Klára Dostálová",1],
  ["Jana Krutáková","Klára Dostálová",1],
  ["Petr Pávek","Klára Dostálová",1],
  ["Marie Pěnčíková","Klára Dostálová",1],
  ["Veronika Vrecionová","Klára Dostálová",1],
  ["Tomáš Hanzel","Klára Dostálová",1],
  ["Ivan Adamec","Marta Nováková",1],
  ["Marie Pěnčíková","Marta Nováková",1],
  ["Dominik Feri","Marta Nováková",1],
  ["Petr Pávek","Marta Nováková",1],
  ["Markéta Pekarová Adamová","Marta Nováková",1],
  ["Lukáš Černohorský","Marta Nováková",1],
  ["Martin Kupka","Marta Nováková",1],
  ["Stanislav Blaha","Marta Nováková",1],
  ["Ing. et Leo Luzar","Marta Nováková",1],
  ["Martin Jiránek","Marta Nováková",1],
  ["Jan Zahradník","Marta Nováková",1],
  ["Petr Pávek","Miroslav Toman",1],
  ["Marek Výborný","Miroslav Toman",1],
  ["Ivo Pojezný","Miroslav Toman",1],
  ["Radek Holomčík","Miroslav Toman",1],
  ["Martin Baxa","Miroslav Toman",1],
  ["Vít Rakušan","Miroslav Toman",1],
  ["Lukáš Bartoň","Miroslav Toman",1],
  ["Vít Kaňkovský","Miroslav Toman",1],
  ["Jiří Valenta","Miroslav Toman",1],
  ["Pavla Golasowská","Miroslav Toman",1],
  ["Vlastimil Válek","Miroslav Toman",1],
  ["Jan Čižinský","Robert Plaga",1],
  ["Karel Rais","Robert Plaga",1],
  ["Vít Rakušan","Robert Plaga",1],
  ["Jana Krutáková","Robert Plaga",1],
  ["František Kopřiva","Robert Plaga",1],
  ["Markéta Pekarová Adamová","Robert Plaga",1],
  ["Martin Kupka","Robert Plaga",1],
  ["Miroslav Kalousek","Robert Plaga",1],
  ["Věra Procházková","Robert Plaga",1],
  ["Petr Beitl","Robert Plaga",1],
  ["Jan Zahradník","Robert Plaga",1],
  ["Radek Zlesák","Robert Plaga",1],
  ["Helena Langšádlová","Robert Plaga",1],
  ["Stanislav Blaha","Robert Plaga",1],
  ["Jiří Mihola","Robert Plaga",1],
  ["Tomáš Martínek","Robert Plaga",1],
  ["Petr Gazdík","Robert Plaga",1],
  ["Mikuláš Ferjenčík","Robert Plaga",1],
  ["Jiří Ventruba","Robert Plaga",1],
  ["Jan Lipavský","Robert Plaga",1],
  ["Jiří Valenta","Robert Plaga",1],
  ["Karla Maříková","Robert Plaga",1],
  ["Lenka Kozlová","Robert Plaga",1],
  ["Tereza Hyťhová","Robert Plaga",1],
  ["Jiří Valenta","Tomáš Hüner",1],
  ["Ivan Adamec","Tomáš Hüner",1],
  ["Karla Maříková","Tomáš Hüner",1],
  ["Marian Bojko","Tomáš Hüner",1],
  ["Miroslav Kalousek","Tomáš Hüner",1],
  ["Ondřej Profant","Tomáš Hüner",1],
  ["Stanislav Blaha","Tomáš Hüner",1],
  ["Jan Chvojka","Tomáš Hüner",1],
  ["Vojtěch Munzar","Tomáš Hüner",1],
  ["Radek Koten","Jan Hamáček",1],
  ["Tomáš Martínek","Jan Hamáček",1],
  ["Martin Kolovratník","Jan Hamáček",1],
  ["Mikuláš Ferjenčík","Jan Hamáček",1],
  ["František Elfmark","Jan Hamáček",1],
  ["Petr Třešňák","Jan Hamáček",1],
  ["Markéta Pekarová Adamová","Jan Hamáček",1],
  ["Josef Kott","Jan Hamáček",1],
  ["Radek Holomčík","Jan Hamáček",1],
  ["Barbora Kořanová","Jan Hamáček",1],
  ["Miroslav Kalousek","Jan Hamáček",1],
  ["Helena Langšádlová","Jan Hamáček",1],
  ["Zuzana Majerová Zahradníková","Jan Hamáček",1],
  ["Jan Čižinský","Jan Hamáček",1],
  ["Ing. et Jan Skopeček","Jan Hamáček",1],
  ["Jan Farský","Jan Hamáček",1],
  ["Tereza Hyťhová","Jan Hamáček",1],
  ["Radim Fiala","Jan Hamáček",1],
  ["Martin Kupka","Jan Hamáček",1],
  ["Ivana Nevludová","Jan Hamáček",1],
  ["Zdeněk Ondráček","Jan Hamáček",1],
  ["Dominik Feri","Alena Schillerová",1],
  ["Vít Kaňkovský","Alena Schillerová",1],
  ["Vít Rakušan","Alena Schillerová",1],
  ["Jan Lipavský","Alena Schillerová",1],
  ["Petr Dolínek","Alena Schillerová",1],
  ["Jana Krutáková","Alena Schillerová",1],
  ["Petr Beitl","Alena Schillerová",1],
  ["Lenka Kozlová","Alena Schillerová",1],
  ["Jan Pošvář","Alena Schillerová",1],
  ["Stanislav Blaha","Alena Schillerová",1],
  ["Jan Zahradník","Alena Schillerová",1],
  ["Helena Langšádlová","Alena Schillerová",1],
  ["Jiří Valenta","Alena Schillerová",1],
  ["František Kopřiva","Alena Schillerová",1],
  ["Vlastimil Válek","Alena Schillerová",1],
  ["Martin Kupka","Alena Schillerová",1],
  ["Marian Jurečka","Alena Schillerová",1],
  ["Zuzana Majerová Zahradníková","Alena Schillerová",1],
  ["Pavel Jelínek","Jan Kněžínek",1],
  ["Vojtěch Munzar","Jan Kněžínek",1],
  ["Olga Richterová","Jan Kněžínek",1],
  ["Marian Jurečka","Jan Kněžínek",1],
  ["František Vácha","Jan Kněžínek",1],
  ["Vít Rakušan","Robert Pelikán",1],
  ["Dominik Feri","Robert Pelikán",1],
  ["Jan Farský","Robert Pelikán",1],
  ["František Kopřiva","Robert Pelikán",1],
  ["Věra Kovářová","Robert Pelikán",1],
  ["Ing. et Leo Luzar","Robert Pelikán",1],
  ["Ondřej Veselý","Robert Pelikán",1],
  ["Jan Bartošek","Robert Pelikán",1],
  ["Jakub Michálek","Robert Pelikán",1],
  ["Jana Krutáková","Robert Pelikán",1],
  ["Petr Gazdík","Robert Pelikán",1],
  ["Miroslav Kalousek","Robert Pelikán",1],
  ["Miroslava Němcová","Robert Pelikán",1],
  ["Petr Pávek","Robert Pelikán",1],
  ["František Vácha","Robert Pelikán",1],
  ["Zuzana Majerová Zahradníková","Vladimír Kremlík",1],
  ["Lenka Kozlová","Vladimír Kremlík",1],
  ["Jan Zahradník","Vladimír Kremlík",1],
  ["Petr Bendl","Vladimír Kremlík",1],
  ["Jiří Ventruba","Vladimír Kremlík",1],
  ["Tomáš Martínek","Vladimír Kremlík",1],
  ["Vlastimil Válek","Vladimír Kremlík",1],
  ["Martin Kolovratník","Vladimír Kremlík",1],
  ["Zdeněk Podal","Vladimír Kremlík",1],
  ["Radek Holomčík","Vladimír Kremlík",1],
  ["Vít Rakušan","Vladimír Kremlík",1],
  ["Jiří Kohoutek","Vladimír Kremlík",1],
  ["Karla Maříková","MgA. Martin Stropnický",1],
  ["Stanislav Blaha","MgA. Martin Stropnický",1],
  ["Mikuláš Peksa","MgA. Martin Stropnický",1],
  ["Miroslav Kalousek","MgA. Martin Stropnický",1],
  ["Jiří Valenta","MgA. Martin Stropnický",1],
  ["Olga Richterová","Petr Krčál",1],
  ["Dominik Feri","Adam Vojtěch",1],
  ["Daniel Pawlas","Adam Vojtěch",1],
  ["Petr Dolínek","Adam Vojtěch",1],
  ["Miroslav Kalousek","Adam Vojtěch",1],
  ["Helena Langšádlová","Adam Vojtěch",1],
  ["Ondřej Polanský","Adam Vojtěch",1],
  ["Jiří Ventruba","Adam Vojtěch",1],
  ["Patrik Nacher","Adam Vojtěch",1],
  ["Tomáš Hanzel","Adam Vojtěch",1],
  ["Jana Krutáková","Adam Vojtěch",1],
  ["Tereza Hyťhová","Adam Vojtěch",1],
  ["Petr Pávek","Adam Vojtěch",1],
  ["Kateřina Valachová","Adam Vojtěch",1],
  ["František Navrkal","Adam Vojtěch",1],
  ["Vít Rakušan","Adam Vojtěch",1],
  ["Lucie Šafránková","Adam Vojtěch",1],
  ["Ondřej Profant","Adam Vojtěch",1],
  ["Vojtěch Munzar","Adam Vojtěch",1],
  ["Ivan Bartoš","Adam Vojtěch",1],
  ["Ivana Nevludová","Adam Vojtěch",1],
  ["Marie Pěnčíková","Adam Vojtěch",1],
  ["Zdeněk Ondráček"," Taťána Malá",1],
  ["Věra Kovářová"," Taťána Malá",1],
  ["Vojtěch Munzar"," Taťána Malá",1],
  ["Lubomír Volný","Lubomír Metnar",1],
  ["Mikuláš Ferjenčík","Lubomír Metnar",1],
  ["Jan Bauer","Lubomír Metnar",1],
  ["Pavla Golasowská","Lubomír Metnar",1],
  ["Kateřina Valachová","Lubomír Metnar",1],
  ["Helena Langšádlová","Lubomír Metnar",1],
  ["Petr Dolínek","Lubomír Metnar",1],
  ["Pavel Jelínek","Lubomír Metnar",1],
  ["Mikuláš Peksa","Lubomír Metnar",1],
  ["Vít Rakušan","Lubomír Metnar",1],
  ["Ondřej Profant","Lubomír Metnar",1],
  ["Jakub Janda","Lubomír Metnar",1],
  ["Jiří Valenta","Lubomír Metnar",1],
  ["Karla Maříková","Lubomír Metnar",1],
  ["Jan Lipavský","Lubomír Metnar",1],
  ["Jana Krutáková","Marie Benešová",1],
  ["Ing. et Leo Luzar","Marie Benešová",1],
  ["Hana Aulická Jírovcová","Marie Benešová",1],
  ["František Vácha","Marie Benešová",1],
  ["Věra Procházková","Richard Brabec",1],
  ["Olga Richterová","Richard Brabec",1],
  ["Ondřej Profant","Richard Brabec",1],
  ["Miroslav Kalousek","Richard Brabec",1],
  ["Tomáš Martínek","Richard Brabec",1],
  ["Ondřej Polanský","Richard Brabec",1],
  ["Vít Kaňkovský","Richard Brabec",1],
  ["Marek Výborný","Richard Brabec",1],
  ["Petr Dolínek","Richard Brabec",1],
  ["Mikuláš Peksa","Richard Brabec",1],
  ["Martin Jiránek","Richard Brabec",1],
  ["Pavel Jelínek","Richard Brabec",1],
  ["Lucie Šafránková","Richard Brabec",1],
  ["Jaroslav Martinů","Richard Brabec",1],
  ["Jana Černochová","Tomáš Petříček",1],
  ["Vojtěch Munzar","Tomáš Petříček",1],
  ["František Navrkal","Tomáš Petříček",1],
  ["Ing. et Jan Skopeček","Tomáš Petříček",1],
  ["Ing. et Leo Luzar","Tomáš Petříček",1],
  ["Marek Výborný","Tomáš Petříček",1],
  ["Jan Bartošek","Tomáš Petříček",1],
  ["Petr Pávek","Tomáš Petříček",1],
  ["Petr Beitl","Tomáš Petříček",1],
  ["Zuzana Majerová Zahradníková","Tomáš Petříček",1],
  ["Mikuláš Peksa","Ilja Šmíd",1],
  ["Petr Dolínek","Ilja Šmíd",1],
  ["Petr Gazdík","Ilja Šmíd",1],
  ["Ing. et Leo Luzar","Ilja Šmíd",1],
  ["Věra Kovářová","Ilja Šmíd",1],
  ["Helena Langšádlová","Lubomír Zaorálek",1],
  ["Ondřej Babka","Lubomír Zaorálek",1],
  ["Martin Baxa","Lubomír Zaorálek",1],
  ["Pavel Jelínek","Lubomír Zaorálek",1],
  ["Ondřej Profant","Lubomír Zaorálek",1]
];

$(document).ready(function() {
  $('#tablica').DataTable({
    data: datatablica,
    columns: [
      { title: "Poslanec" },
      { title: "Ministr" },
      { title: "Interpelací" }
    ],
    "order": [[ 2, "desc" ]],
    "responsive": true,
    "ordering": true,
    "searching": false,
    "paging": true,
    "bInfo": false,
    "language": {
      "url": "https://interaktivni.rozhlas.cz/tools/datatables/Czech.json"
    }
  });
});