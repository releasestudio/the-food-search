const yelpApiKey = "c5UDJReMGSyMR6Frk2gSd9_DTgG2BWCFA-0P_UUG03gCHylhnuavlXoA8tGsGO4UP0HMrRZDaHTBRymPkHp_LHqoweDpOY2_FUSh8WL6hBJr-O2UAOMqFVvGASj4XXYx";
const Yelp = {
    search(term, location, sortBy){
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}&limit=9`,
            {headers: 
                {Authorization: `Bearer ${yelpApiKey}`}
            }).then(
                response =>{ return response.json(); }
            ).then(
                jsonResponse =>{ if (jsonResponse.businesses){ 
                    if(jsonResponse.businesses[0]){
                    return jsonResponse.businesses.map( business =>{
                        // console.log(business)
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            url: business.url,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            rating: business.rating,
                            reviewCount: business.review_count,
                        };
                    })}else{return null}
                }else{
                    return null;
                }
            }
            );
        }
};
export default Yelp;