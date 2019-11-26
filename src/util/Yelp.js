const apiKey = 'LPxrrAjxYauMBIvYRzdOfmJ385J-L7dVcc2sFx2D8qRoL_6aKQNgEtYg46vBoLhkBL7siGE7-ZXpQTXk4IrrBUm-u9_jVHP9Fxj70xUHC14aDa2XMaFj5JfV-VPbXXYx';
const Yelp = {
    search(term, location, sortBy){
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {headers: 
                {Authorization: `Bearer ${apiKey}`}
            }).then(
                response =>{ return response.json(); }
            ).then(
                jsonResponse =>{ if (jsonResponse.businesses){ 
                    return jsonResponse.businesses.map( business =>{
                        console.log(business)
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            url: business.url,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].alias,
                            rating: business.rating,
                            reviewCount: business.review_count,
                        };
                    })
                }}
            );
    }
};
export default Yelp;