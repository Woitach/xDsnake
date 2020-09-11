import React from 'react';
import './main.css';
import Post from '../Post/post.js';
import Postapost from '../Postapost/postapost.js';

function Main() {
    let title1 = "tytul";
    let descript1 = "utwór narracyjny prozą objętością przekraczający rozmiary noweli i opowiadania, krótszy natomiast od powieści. Jest to gatunek bez wyraźnie wyodrębnionych cech: jest klasyfikowany wyłącznie jako typ pośredni między dużymi i małymi formami narracji. Pewne cechy dające się wyodrębnić to: jednowątkowa fabuła, chronologiczny układ wydarzeń, luźna budowa z epizodami, motywami opisowymi, analizami psychologicznymi, refleksjami. Dawniej - do XIX w. - charakterystyczne dla niej było występowanie ujawnionego narratora osobowego. Dzisiaj traktuje się ją prawie wyłącznie jako krótką powieść lub dłuższe opowiadanie, np. Wierna rzeka S. Żeromskiego, Panny z Wilka J. Iwaszkiewicza.";
    return (
        <header>
            <table className="title">
                <tr>
                    <td >
                        Aktualności<br/><br/>
                    </td>
                </tr>
                <tr className="Shadow"><td>.</td></tr>
            </table><br/><br/>
            <Postapost/>
        </header>
    );
}

export default Main