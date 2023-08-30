class Gadget {
    constructor(
        id,
        title,
        imageUrl,
        price,
        shortDescription,
        categoryIds
    ) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.shortDescription = shortDescription;
        this.categoryIds = categoryIds;
    }
}

export default Gadget;