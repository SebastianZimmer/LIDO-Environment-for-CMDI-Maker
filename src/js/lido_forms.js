﻿lido_environment.forms = {};

lido_environment.forms.start = {
	name: "start",
	type: "form",
	fields: [
		{
			type: "subarea",
			heading: "Digitalisierungssignatur",
			name: "digitalisierungssignatur",
			fields: [
				{
					heading: undefined,
					name: "digitalisierungssignatur",
					type: "text",
					default_value: "TWS_"
				}
			]
		},
		{
			type: "subarea",
			heading: "Eintragsdokumentation",
			name: "eintragsdokumentation",
			fields: [
				{
					heading: "Eintragsart",
					name: "eintragsart",
					type: "open_vocabulary",
					vocabulary: ["Einzelobjekt", "Konvolut"],
				},
				{
					heading: "Objektsignatur",
					name: "objektsignatur",
					type: "text"
				}
			]
		}
	],
};


lido_environment.forms.objektbeschreibung = {
	name: "objektbeschreibung",
	type: "form",
	fields: [
		{
			type: "column",
			title: "Objekt-Identifikation",
			name: "objekt_identifikation",
			fields: [
				{
					heading: "Titel",
					name: "titel",
					type: "text"
				},
				{
					heading: "Objektbeschreibung",
					name: "objektbeschreibung",
					type: "textarea"
				},
				{
					heading: "Maße",
					name: "maße",
					type: "text"
				},
				{
					heading: "Maßeinheit",
					name: "maßeinheit",
					type: "text",
					default_value: "cm"
				},
				{
					heading: "Maßtyp",
					name: "maßtyp",
					type: "text",
					default_value: "H x B x T"
				},
				{
					heading: "Inventarnummer",
					name: "inventarnummer",
					type: "text"
				},
				{
					heading: "Besitzende Institution",
					name: "besitzende_institution",
					type: "text",
					default_value: "Theaterwissenschaftliche Sammlung, UNiversität zu Köln"
				},
				{
					heading: "Standort in der TWS",
					name: "standort_tws",
					type: "open_vocabulary",
					vocabulary: [
						"Autografensammlung", "Bibliothek", "Büsten und Statuetten", "Druckgrafik", "Filmarchiv", "Fotoabteilung", "obere Grafik", "untere Grafik",
						"Hänneschen-Sammlung", "Kriegstheaterarchiv", "Kritikenabteilung", "Programmheftabteilung", "Puppensammlung", "Rara",
						"Schattenspielsammlung", "Zeitschriften"
					]
				}
			]
		},
		{
			type: "column",
			title: "Objekt-Zuordnung",
			name: "objektzuordnung",
			fields: [
				{
					heading: "Objektgattung",
					name: "objektgattung",
					type: "open_vocabulary",
					vocabulary: ["Bild", "Figur", "Maske", "Modell", "Schrift"]
				},
				{
					heading: "Objektart",
					name: "objektart",
					type: "open_vocabulary",
					vocabulary: [
						"Bühnenmodell", "Brief", "Buch", "Büste", "Dia", "Film", "Filmfotografie", "Filmplakat", "Fotoalbum", "Fotonegativ",
						"Gemälde", "Handpuppe", "Handschrift", "Inszenierungsfotografie", "Libretti", "Marionette", "Noten", "Papiertheater",
						"Personenfotografie", "Postkarte", "Porträtgrafik", "Porzellanfigur", "Programmheft", "Rezension", "Schattenspielfigur",
						"Statue", "Stockpuppe", "Szenische Grafik", "Tanzfotografie", "Theaterbaufotografie", "Theaterbaugrafik", "Theatermaske",
						"Theaterplakat", "Theaterzettel", "Totenmaske", "Typoskript", "Zeitschrift", "Zeitungsausschnitt", "Sonstige Fotografie"
					]
				},
				{
					type: "subarea",
					heading: "Thematik / Bildinhalt / Abgebildete Person",
					name: "thematik",
					fields: [
						{
							heading: "Thematik",
							name: "thematik",
							type: "textarea"
						}
					]
				}
			]
		}
	]
	
};


lido_environment.forms.herstellung = {
	name: "herstellung",
	title: "Herstellung des Objekts",
	type: "form",
	fields: [
		{
			heading: "Herstellungsbeschreibung",
			name: "herstellungsbeschreibung",
			type: "textarea"
		},
		{
			heading: "Ort",
			name: "ort",
			type: "text"
		},
		{
			heading: "Datum (frühestes)",
			name: "earliest_date",
			type: "year"
		},
		{
			heading: "Datum (spätestes)",
			name: "latest_date",
			type: "year"
		},
		{
			heading: "Kultureller Kontext",
			name: "culture",
			type: "text"
		}
	]
};


lido_environment.forms.actor_herstellung = {
	name: "actor",
	type: "form",
	fields: [
		{
			name: "name",
			heading: "Name (Name, Vorname)",
			type: "text",
		},
		{
			name: "function",
			heading: "Funktion",
			type: "open_vocabulary",
			vocabulary: ["BildhauerIn", "BühnenbildnerIn", "FotografIn", "KomponistIn", "KünstlerIn", "MalerIn", "ErstellerIn des Konvoluts", "VerfasserIn"]
		},
		{
			name: "pnd_id",
			heading: "AkteurIn ID (PNG)",
			type: "text"
		},
		{
			name: "geburtsjahr",
			heading: "Geburtsjahr",
			type: "year"
		},
		{
			name: "sterbejahr",
			heading: "Sterbejahr",
			type: "year"
		},
		{
			name: "geschlecht",
			heading: "Geschlecht",
			type: "select",
			vocabulary: ["male", "female"]
		}
	]
};



lido_environment.forms.inszenierung = {
	name: "inszenierung",
	title: "Inszenierung / Performance",
	type: "form",
	fields: [
		{
			name: "titel",
			heading: "Titel",
			type: "text"
		},
		{
			heading: "Performance-Beschreibung",
			name: "performancebeschreibung",
			type: "textarea"
		},
		{
			heading: "Ort",
			name: "ort",
			type: "text"
		},
		{
			heading: "Datum (frühestes)",
			name: "earliest_date",
			type: "year"
		},
		{
			heading: "Datum (spätestes)",
			name: "latest_date",
			type: "year"
		},
		{
			heading: "Kultureller Kontext",
			name: "culture",
			type: "text"
		}
	]
};


lido_environment.forms.actor_inszenierung = {
	name: "actor",
	type: "form",
	fields: [
		{
			name: "name",
			heading: "Name (Name, Vorname)",
			type: "text",
		},
		{
			name: "function",
			heading: "Funktion",
			type: "open_vocabulary",
			vocabulary: [
				"AutorIn des inszenierten Werks", "BühnenbildnerIn der Inszenierung", "ChoreographIn des inszenierten Werks",
				"DarstellerIn der Inszenierung", "DrehbuchautorIn des Films", "KomponistIn des inszenierten Werks",
				"Konzeptionierung", "RegisseurIn des inszenierten Werks"
			]
		},
		{
			name: "pnd_id",
			heading: "AkteurIn ID (PNG)",
			type: "text"
		},
		{
			name: "geburtsjahr",
			heading: "Geburtsjahr",
			type: "year"
		},
		{
			name: "sterbejahr",
			heading: "Sterbejahr",
			type: "year"
		},
		{
			name: "geschlecht",
			heading: "Geschlecht",
			type: "select",
			vocabulary: ["male", "female"]
		}
	]
};




lido_environment.forms.erwerb = {
	name: "erwerb",
	title: "Provenienz / Erwerb",
	type: "form",
	fields: [
		{
			heading: "Provenienzbeschreibung",
			name: "provenienzbeschreibung",
			type: "textarea"
		},
		{
			heading: "Ort",
			name: "ort",
			type: "text"
		},
		{
			heading: "Datum (frühestes)",
			name: "earliest_date",
			type: "year"
		},
		{
			heading: "Datum (spätestes)",
			name: "latest_date",
			type: "year"
		},
		{
			heading: "Kultureller Kontext",
			name: "culture",
			type: "text"
		}
	]
};


lido_environment.forms.actor_erwerb = {
	name: "actor",
	type: "form",
	fields: [
		{
			name: "name",
			heading: "Name (Name, Vorname)",
			type: "text",
		},
		{
			name: "function",
			heading: "Funktion",
			type: "open_vocabulary",
			vocabulary: [
				"KäuferIn", "NachlasserIn", "StifterIn", "VerkäuferIn", "VermittlerIn", "VorbesitzerIn"
			]
		},
		{
			name: "pnd_id",
			heading: "AkteurIn ID (PNG)",
			type: "text"
		},
		{
			name: "geburtsjahr",
			heading: "Geburtsjahr",
			type: "year"
		},
		{
			name: "sterbejahr",
			heading: "Sterbejahr",
			type: "year"
		},
		{
			name: "geschlecht",
			heading: "Geschlecht",
			type: "select",
			vocabulary: ["male", "female"]
		}
	]
};