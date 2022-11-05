import Card from "../components/Card";

function Library() {
    const MyPlaceholderData = [
        {
            id : 1,
            name : "React",
            image : "https://www.bing.com/images/search?view=detailV2&ccid=qy%2beBcr%2b&id=B60072830940483111BA4FD5B8CC90FE4D97CDA2&thid=OIP.qy-eBcr-nZrfLNm8hkaByAAAAA&mediaurl=https%3a%2f%2fblog.scottlogic.com%2fdkerr%2fassets%2ffeatured%2freact.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.ab2f9e05cafe9d9adf2cd9bc864681c8%3frik%3dos2XTf6QzLjVTw%26pid%3dImgRaw%26r%3d0&exph=399&expw=400&q=React&simid=608046938755586493&FORM=IRPRST&ck=867797C85E7D8DCF6DAF4DBEECF17AC3&selectedIndex=3",
            description : "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
        },
        {
            id : 2,
            name : "French",
            image : "https://www.bing.com/images/search?view=detailV2&ccid=Qdy8dALq&id=A47B44E82DEF39ACC0A4FFCE16CC46D1EA18BFB5&thid=OIP.Qdy8dALqq_Y-8togqbcN1wHaHa&mediaurl=https%3a%2f%2fqph.fs.quoracdn.net%2fmain-qimg-b0246a9c2d0ab4a2b899f3ec6c16d1ec&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.41dcbc7402eaabf63ef2da20a9b70dd7%3frik%3dtb8Y6tFGzBbO%252fw%26pid%3dImgRaw%26r%3d0&exph=602&expw=602&q=french+language&simid=608018720815867487&FORM=IRPRST&ck=E8DC51F84A7EEAD960512B9A702603F3&selectedIndex=2",
            description : "Practice French Grammar",
        }
    ]

    return (
      <div>
        {
            MyPlaceholderData.map((item) => {
                return <Card
                    key = {item.id}
                    coverImage = {item.image}
                    title = {item.name}
                    description = {item.description}
                    />
            })
        }
      </div>  
    );
}

export default Library;
