const cities = ['Москва', 'Санкт-Петербург', 'Нью-Йорк', 'Токио'];
        const temperatures = [];

        for (let i = 0; i < cities.length; i++) {
            let temperature = prompt(`Введите температуру воздуха для города ${cities[i]}`);
            temperatures.push(Number(temperature));
        }

        const list = document.createElement('ul');

        for (let i = 0; i < cities.length; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = `Температура в городе ${cities[i]}: ${temperatures[i]}°C`;
            list.appendChild(listItem);
        }

        document.body.appendChild(list);

        const maxTemperature = Math.max(...temperatures);
        const minTemperature = Math.min(...temperatures);

        const maxInfo = document.createElement('p');
        const strongMax = document.createElement('strong');
        strongMax.textContent = `Максимальная температура: ${maxTemperature}°C`;
        maxInfo.appendChild(strongMax);

        const minInfo = document.createElement('p');
        const strongMin = document.createElement('strong');
        strongMin.textContent = `Минимальная температура: ${minTemperature}°C`;
        minInfo.appendChild(strongMin);

        document.body.appendChild(maxInfo);
        document.body.appendChild(minInfo);