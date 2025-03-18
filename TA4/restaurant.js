const dishes = {
    mesa: {
        title: "Mesa",
        info: "Mesa was founded in 2009 by co-owners and real-life partners Sharon Cuneta and Francis Pangilinan with Kc Conception as one of the investors. Mesa is the only grill restaurant where customers can have their meal grilled right at their table. They are serving traditional Filipino food with a twist, where they made it extra special with their innovative idea of modernizing the way they create and cook their food masterpiece.",
        image: "mesa2.png",
        category: "Filipino",
    },
    hawker: {
        title: "Hawker Chan",
        info: "Hawker Chan is a Singaporean restaurateur who has become famous for his som tam and chicken rice meals. He earned fame after the Michelin Guide awarded him with one star in 2016, as well as the Food Hero Award from the Social Enterprise Association of Singapore in 17.",
        image: "hakwer2.jpg",
        category: "Singaporean",
    },
    italianni: {
        title: "Italianni's",
        info: "American-Italian cuisine, coupled with its unique shared style dining concept as essayed by its slogan “Amore di Merrier”, made Italianni’s an instant hit among Filipinos. We brought the Italian family art of eating for everyone to enjoy. An Italian passion evident in every item on our menu, authentically prepared with the finest ingredients and built on a wide selection of American-Italian flavors.",
        image: "italliani2.jpg",
        category: "Italian",
    },
    kuya: {
        title: "Kuya J",
        info: "Kuya J Restaurant, formerly known as “Ang Kan-anan ni Kuya J,” started as a humble eatery along the streets of Cebu. But with Kuya J’s undeniably delicious dishes, mouthwatering words of recommendation quickly spread into every Cebuanos’ palate. With that, Kuya J instantly became one of the well-loved restaurants in Cebu.",
        image: "kuyaj3.webp",
        category: "Filipino",
    }
};

function showDetails(dishKey) {
    const dish = dishes[dishKey];

    document.getElementById("dishTitle").textContent = dish.title;
    document.getElementById("dishInfo").textContent = dish.info;
    document.getElementById("dishImage").src = dish.image;
    document.getElementById("dishCategory").textContent = dish.category;

    document.getElementById("dishDetails").style.display = "block";

    let dishDetails = document.getElementById("dishDetails");

    dishDetails.classList.remove("fade-out");
    dishDetails.classList.add("fade-in");
    
    dishDetails.style.display = "block";

}


function goBack() {
    let dishDetails = document.getElementById("dishDetails");

    dishDetails.classList.remove("fade-in");
    dishDetails.classList.add("fade-out");

    setTimeout(() => {
        dishDetails.style.display = "none";
    }, 500);
}

