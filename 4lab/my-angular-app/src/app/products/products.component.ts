import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  standalone: true, // Ensure it's standalone
  imports: [CommonModule], // Needed for *ngIf and *ngFor
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = [
    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'Iphone 13 Black',
      description: 'Характеристики Смартфон Apple iPhone 13 128Gb черный',
      rating: 5,
      kaspiLink:
        'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
      ],
    },
    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      name: 'Iphone 16 Pro Max Black',
      description:
        'Характеристики Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      rating: 4.7,
      kaspiLink:
        'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfc/h0c/87295489441822.png?format=gallery-medium',
      ],
    },
    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
      name: 'Xiaomi Redmi 13C',
      description:
        'Смартфон Xiaomi Redmi 13C 8 ГБ/256 ГБ черный',
      rating: 4.7,
      kaspiLink:
        'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/h2d/84526902837278.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h4b/84526902771742.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
      ],
    },
    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
      name: 'Apple AirPods 3',
      description:
        'Характеристики Наушники Apple AirPods 3 with Lightning Charging Case белый',
      rating: 4,
      kaspiLink:
        'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h30/ha4/64362737860638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h63/h66/64362740416542.jpg?format=gallery-medium',
      ],
    },
    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      name: 'Apple AirPods Pro 2 ',
      description:
        'Характеристики Наушники Apple AirPods Pro 2 with Type-C/Wireless Charging белый',
      rating: 4.8,
      kaspiLink:
        'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/hf2/84108189827102.jpg?format=gallery-medium',
      ],
    },
    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hfa/h5d/87309386514462.png?format=gallery-medium',
      name: 'Apple AirPods 4 Active Noise Cancellation',
      description:
        'Характеристики Наушники Apple AirPods 4 Active Noise Cancellation белый',
      rating: 4.5,
      kaspiLink:
        'https://kaspi.kz/shop/p/apple-airpods-4-active-noise-cancellation-belyi-124333921/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfa/h5d/87309386514462.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/he6/87309386219550.png?format=gallery-medium',
      ],
    },
    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=gallery-medium',
      name: 'Ноутбук ThundeRobot',
      description:
        'Ноутбук ThundeRobot 911 X Wild Hunter G2 Pro 15.6" / 16 Гб / SSD 512 Гб',
      rating: 5,
      kaspiLink:
        'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h39/hca/86274830139422.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb5/hb9/86274830204958.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h36/h1f/86274830270494.jpg?format=gallery-medium',
      ],
    },
    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h89/haa/64373052571678.jpg?format=gallery-medium',
      name: 'Ноутбук Lenovo',
      description:
        'Ноутбук Lenovo IdeaPad 3 15.6" / 4 Гб / SSD 256 Гб',
      rating: 4.7,
      kaspiLink:
        'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-4-gb-ssd-256-gb-bez-os-15igl05-81wq00emrk-102878742/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5d/h65/64373055684638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h47/64373056897054.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hec/h98/64373091041310.jpg?format=gallery-medium',
      ],
    },
    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      name: 'Ноутбук Apple MacBook Air',
      description:
        'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб ',
      rating: 4.7,
      kaspiLink:
        'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h70/64509325803550.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/hb7/64509328457758.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8e/h0c/64509330030622.jpg?format=gallery-medium',
      ],
    },
    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/hc8/84558388887582.jpg?format=gallery-medium',
      name: 'Ноутбук Acer Aspire',
      description:
        'Ноутбук Acer Aspire 3 15.6" / 8 Гб / SSD 256 Гб',
      rating: 4.7,
      kaspiLink:
        'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-a315-35-nx-a9aex-00h-114792265/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8f/h39/84558388953118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf7/h99/84558389084190.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h3e/84558389018654.jpg?format=gallery-medium',
      ],
    },
    {
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',
      name: 'Пылесос Deerma',
      description:
        'Пылесос Deerma DX700 белый',
      rating: 4.7,
      kaspiLink:
        'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd3/h67/63803862581278.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h20/he1/63803865792542.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/had/h34/63803868741662.jpg?format=gallery-medium',
      ],
    },
  ];

  shareProduct(link: string) {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(link)}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
      link
    )}`;
    window.open(whatsappUrl, '_blank');
    // Alternatively, you can use telegramUrl for Telegram
  }
}
