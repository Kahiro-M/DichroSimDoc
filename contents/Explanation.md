# 解説

## 動作環境
動作環境は以下の通りです。

| 構成要素 | 説明 | 
|:--------:|:-----|
| GUI | HTML(Input要素) |
| 内部処理 | JavaScript |

| 使用ライブラリ名 | 使用目的 | 
|:----------------:|:---------|
| [math.js](http://techc.omorita.com/topics/mathjs/) | 行列計算 | 
| [CIE DE 2000](https://qiita.com/hachisukansw/items/860f061a2ab7a4f2d06f) | 色差計算(DeltaE2000) | 


## xy色度座標版での処理の流れ
1. 二色の色度値であるxyY値を取得(htmlのfromから取得)
1. 色度値をXYZ値に変換(XYZとxyYの関係は[CIE1931色空間(wiki)](https://ja.wikipedia.org/wiki/CIE_1931_%E8%89%B2%E7%A9%BA%E9%96%93)を参照)
1. XYZ値を錐体反応値に変換(CIE測色標準観察者の錐体分好感度に基づく)
1. 各色覚タイプの錐体反応値へ変換<sup>※</sup>  
<sup>※ Hans Brettle, Francoise Vienot, John Deutan. Mollon：Computerized simulation of color appearance for dichromats：J.Opt.Soc.Am.A, Vol.14, No.10, pp. 2647-2655 (1997)</sup>
1. 錐体反応値からXYZ値に逆変換
1. XYZ値からL* a* b*に変換([Lab色空間(wiki)](https://ja.wikipedia.org/wiki/Lab%E8%89%B2%E7%A9%BA%E9%96%93#CIE_XYZ_%E3%81%8B%E3%82%89%E3%81%AE%E5%A4%89%E6%8F%9B))
1. 各タイプのL* a* b*から色差を算出([CIE DE 2000](https://qiita.com/hachisukansw/items/860f061a2ab7a4f2d06f))
1. 色差を[日本工業規格](https://www.toyoink1050plus.com/color/chromatics/basic/005.php)に基づき程度を判定


## sRGB版での処理の流れ
1. 二色のR値、G値およびB値を取得(htmlのfromから取得)
1. sRGBをXYZ値に変換(sRGBとXYZの関係は[sRGB - Wiki(英語)](https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation)を参照)
1. XYZ値を錐体反応値に変換(CIE測色標準観察者の錐体分好感度に基づく)
1. 各色覚タイプの錐体反応値へ変換<sup>※</sup>  
<sup>※ Hans Brettle, Francoise Vienot, John Deutan. Mollon：Computerized simulation of color appearance for dichromats：J.Opt.Soc.Am.A, Vol.14, No.10, pp. 2647-2655 (1997)</sup>
1. 錐体反応値からXYZ値に逆変換
1. XYZ値からL* a* b*に変換([Lab色空間(wiki)](https://ja.wikipedia.org/wiki/Lab%E8%89%B2%E7%A9%BA%E9%96%93#CIE_XYZ_%E3%81%8B%E3%82%89%E3%81%AE%E5%A4%89%E6%8F%9B))
1. 各タイプのL* a* b*から色差を算出([CIE DE 2000](https://qiita.com/hachisukansw/items/860f061a2ab7a4f2d06f))
1. 色差を[日本工業規格](https://www.toyoink1050plus.com/color/chromatics/basic/005.php)に基づき程度を判定
1. L* a* b* に変換する前のXYZをRGBに逆変換
1. 二色のR値、G値およびB値をもとにGUIパーツの色を変更

## より詳細で技術的な解説
各変換原理の詳細は[こちら](https://qiita.com/Kahiro-M/items/9c7ab9edc9a4d04e4638)をご確認ください。