function ProductCard({title, image, price}) {
    return (
        <>
            <div className='product-card'>
                <div className='product-image'>

                    <img
                        src={image}
                        alt={title}
                    />
                </div>
            <h3>{title}</h3>
            <p>₹{price}</p>
            </div>
        </>

    )
}
export default ProductCard;