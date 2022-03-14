import ProductCard from "../products/ProductCard";
import ProductCardMore from "../products/ProductCardMore";
import ProductCardEmpty from "../products/ProductCardEmpty";
import Link from "next/link";
import ScrollContainer from "react-indiana-drag-scroll";

function parsingColorCss(backgroundColors) {
  if (backgroundColors.length == 1) return backgroundColors;

  return `linear-gradient(${backgroundColors.join(', ')})`;
}

function productsSliderWithBackground({ title, link, data, backgroundImage, backgroundColors }) {
  return (
    <>
      <div className="mx-4">
        <div className="flex justify-between mb-4">
          <h1 className="font-bold" style={{ fontSsize: '1.1em' }}>{title}</h1>
          <Link href={link}>
            <a className="font-bold text-green-500">Lihat Semua</a>
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 right-0 top-0 bottom-0" style={{ background: parsingColorCss(backgroundColors) }}></div>
        <div className="h-full absolute left-0">
          <img className='h-full' style={{ maxWidth: '140px', minWidth: '140px' }} src={backgroundImage} alt="" />
        </div>
        <div className="overflow-x-auto relative disable-scrollbars">
          <ScrollContainer vertical={false}>
            <div className="relative flex h-full px-4 mr-4 py-2">
              <ProductCardEmpty />
              {data.map((product, i) =>
                <div key={i} className="item mr-2">
                  <ProductCard {...product} />
                </div>
              )}
              <ProductCardMore link="/" />
            </div>
          </ScrollContainer>
        </div>
      </div>
    </>
  );
}

export default productsSliderWithBackground;