//your JS code here. If required.
// let bands = [
// 		'The Pilot in You' ,
// 		'The Devil Wears Prada',
// 		'Pierce the Veil',
// 		'Norma Jean',
// 		'The Bled',
// 		'Say Anything',
// 		'The Pilot in You',
// 		'The Midway State',
// 		'We Came as Romans',
// 		'Oh, Sleeper',
// 		'A Skylit Drive',
// 		'Anywhere But Here',
// 		'An Old Dog'"'
// ];

 const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

        function stripArticle(name) {
            return name.replace(/^(a |an |the )/i, '').trim();
        }

        const sortedBands = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));
        
        document.getElementById('bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');

