import React from "react";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul className="menulist">
          <li>
            <a href="##">CREATE POST</a>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAfZJREFUSEuVloGN2zAMRR8nqEfIBucRkgnaUW6DNhPcKu0EzgYXb+KbgIUkyqIsKcYZCGIQCj/5+T8V4fQRQMG+/PFOqMkWzpw+JZEgaIAjIJb3cQrxVTQVxcBpnRPIb+vyjrIZ/t64wddQsbpzgAlYgNmSPIGbwFa67HY35t1VNwksmpKvluYNiCAQOgk0JjpjO817d2TxYKBlEXRWYUXlah0/UN4E7ir8CRS4IdvQjJYXA5wQFlRmO/MEuVmFma47ESDVXpfe8F4N2XEuqyXNtIQ8ma4rwlYAOlV35usHGji/GqWRFqsyx5OS9hmMZFyKt+Qyg/oknq5VE6iTqfDaB6mKCTRzuwpcNSVJoMKMRhVZ8to3QxUZRRMqC+jOrWk8qqjEo4p27XtJvgKY1Ewk4NvvzWLrb4FKRdUg2iRRFUO6BlbKM6jhS/vRRPvgDrRY3Mut00ZrtGT1IDsbnGyCGl2NinYPld3lmTisCoFZ4RPkS9BLUktNS1FLR9veT/u7OyfwrvAB/AN+5Z0T1WJ0lU05WmGHO+NwmfxV4SfKwwwT5HnxdJXbrdV73pftfVDOBgP9ONS2Cmrm6qzd0XJ0G9/yxUgY8AXkARq6CJ8Q+8bTc/LJz4sS/UV0QlFedqPtPLqDRo4d7suXPqkl3f/30iDWUP8B1N0CNAhHddwAAAAASUVORK5CYII="
              alt=""
            />
          </li>

          <li>
            <a href="##">LATEST BLOGS</a>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAYZJREFUSEuNVet5wzAIPCboCE03STdpJ2tH6QgZwdkgG6ifhR6HAdn6lUgYuOMAwX4EQKm/8rO0sY/zn1TX9tTXzFvgKLNv9yZA7HbPogyANrt575hohhpA/9wF+CmCm6WrBngU4BPAK+bQJjFtLEUbgHdTDwvpARMkp/GIuAWUwpU+rztbEB9FNqB8A/jr5HREpKMMcs+FVGd8j/sNgo+daq5BD3BQ1gkWDqDxyY+pgZTGneSNEdDiQA2qa6KUrX1gtZDbNUo1VBtlOQhQH1KFEMq06fvXlYkLNTCOPIKgBtxjnqKGgLRs8HAnt3pOHzoeutwVAfM7xgfn2T9Y11dhugCmBmbcEC+mHoqmFTATQkpRpYUp8lkbhSSTOKCIofka8HhKArTOvyRTS9tqBWV7yijNy9T1QdATy+lhJwLPnX3Wv3U5tHosV2kcp94+AdzmqFDLO4DfuhMunbTbn4LyVfq4brI7X/puJwYjMegVbTSXTE7ygpaB+xhnpMLB8saN+MsX1D8nv8gh+3BEIAAAAABJRU5ErkJggg=="
              alt=""
            />
          </li>

          <li>
            <a href="##">BLOGS LIKED</a>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAhxJREFUSEuFlv99EzEMxb+agDBBwwSkExAmACaATtAyAbBBOgFhgzIBYYJmg143aCYQH9uyTz7bh/+6s8/68Z6edEJ3CaCdE0FQO7Fvxp9GE+G4rPht515jw280z/XXycF/orAINiB/QHfpXU6gn4CXsQGQvm2fRnl+QPmwwO0rcFg6WCZV3+mnfwBugQsQMrgL7wI/FL6v0TjgoMrrC/DTYLkGPSNMKFfANcI5EDeTX7NaOWgiEXaoPNrlG+AosFN4BJ4FtqkoRiTmKupX3JZkaAPcI9yZoQPCLcp9hKpje8TBPkIhbHP9WmC/BT66SCcI8HQ0kSCYBG5UOEU7szeZQK9yRC7z16kUyzoDb/sCLbshiDdZAbYratITg0LN2TpP+fZMRW4BErN0kbqDeGv53pd848ACNX59dJVn0LGDsfz3Qe2CPiuEIrFelNJIEM39qUC02ovqsj+ifPYCdBmIWr3nvZqD1X4VK2qj8GRlHQieUqXNK0GSqm+dg34JZcX/BULJFyBzr2pJTtCJbwMrzfEEvAOi4rP5IcmCZpZdS+902WQpEPqEcEHj84vXk2XQITklKWU0VUOuanCho34DfgEBqrJ8BkGtrzx2mRQ/Pp3yk1RqzN4DAaqy7wfOXuCosc+MZlRtzYn0InBoZ0NW8jInT3d/9scWHclfLd9aaFV3aP4eXA33/Pux4GH0Qqt+VZo5Mp4pjSr83X9alOQfaYyQNQAAAABJRU5ErkJggg=="
              alt=""
            />
          </li>

          <li>
            <a href="##">BLOGS POSTED</a>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAa5JREFUSEuNVu1VwzAMPE1AR4AJ2k7AYxJgA0Yqm3SDhglghDCBeLGV+GRLKfllxx93Op2UCPYeAaDBhvLeL/KMl5exPX6LQMO7Mz4xFwEBoExWYsP4zs1psNlCuW+Im18Fi5GasXY5bCZFnKxKKMhCnsAW2a4DtlArgAleElvPvRnqhfAjPzG/KwQvizN6VTYXGcAJKjcL+QxgsgPlaHMXj90VThPp0A4KfAM42K4ZkCeBzpV+auU1OvEk1hy0cxMER18AMgG6RDLIT3AOoCXc18Gi92tcdrio4H2n8gjA1y0l2VFUY9FcFrQHUs0BpK2CEqg2bpoGrmSJyIi5iwrrurNGUIxibrHb6FInaVdPn4pqdXKRo1jLgQHiipwAHLsO8QXgxLn06xVndeWiVFjrFuoBgh8oHozeL4BHATZbu0pmibJ2TXGuZ09Q3IzFGSi2jlqFY3oF9LkLvZ9yH/sAMAPg1rKZzKHdazhDQWcKkutzooM1vZV6v0fp4jCdfwfUrNCCHsXfhmrT4HBQV/EnzgDYFGO7/jeAF5xbNzun7XLNjivWj13IyY9Blus/a3rNHvyEvVEAAAAASUVORK5CYII="
              alt=""
            />
          </li>

          <li>
            <a href="##">BLOGS SUBSCRIBED</a>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAArtJREFUSEt1ltFZ4zAQhP+tgFwFcBWQVBDoADrgKiCpIKECQgVcB0AFMRWc0wFUQKhg7xtpbUux0UtiWVrNzsyubEwOAzzeGIbHUz0/rIHhTfxLP9r7wxhtSOvqzSMQfVBX7PQ6H1ACKw/M8zfAJXAFzON1CzQGrcPbTyAVuMggqBhOnjs8K2gASyn3sAKdgw77Q/49QTtFUY6xNdhkFewTfIfR4PwLtNfKyODO4Two2AIPdTYnBwTSLc4mFj4BqyGDXmvp3jG7A+4D/BpHz/2oKAIXxx1KRWhxuwY/xo7BWjn8DGOPhzYZyQK87f1QoFMM8ShBnwyu3LjErTV853AXQmtdAwmpaJmDHQxv3LjHaQ0WtYtyfjfgL8AncAEIXYPb5VAHfWkMWhsHPDlMWX6QNOEWeD1xUQhrPEjkCCXUzwbfDiuw16BL88rgDOMWV7A0VsBjEtuQllWhKe0lcA3WRBE1YEvwQFR55M7g2eG9oC5paPDuuW6qOjiCn3UhTip5quJnwNe4yNLOI8avkwysOGDUcyYPMPgqbNXXIfCNMUu9qEDaGL50WEByjgB0tE1SJH2oKboC24P3tJXIJOwGY43bLg7oRD5mm9p7IfKjwcx7xyTCt7htwFXRyShlod0Y/uLGB87vZFPYg83Ldl1aNmqoxWWMzqZ2XpoiUzT0sDYXF2oRcpRccTDYurHC05yGKMiFlterQDWnlqH1apS5uk7c0reKmD+EBetWkRuvhrKUTqr+biyGzlpT1N1iWYs8dmDrgiKP/6V2Q7ODdWRW3U1jK2eBJLjqTeX/N5AKrYZQLg1WblwEx2uMXb4muyu2o2j6RhNdClykP7lQNKqqpV/Zo4orM8tRnVykpStThw1XZmrjiXuJ2/WhKSbqK7P8SphcPe4jnVfG4LpsRklPTEx/tpQQ6k3l03+h+B4uJEP2IAAAAABJRU5ErkJggg=="
              alt=""
            />
          </li>

          <li>
            <a href="##">ACCOUNT SETTINGS</a>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAmdJREFUSEuNle1ZIkEQhN+K4MjguAjciwCMQIlAjEAyECNQI1AiODIAI4DLADPACPqeno+d/TycX7uzs93VVdU9ol4CLL21n4XVX8p5aJ4K+wMhfKsO2gwUzvYiNMN/7zkm6EUTY6gvhJ0CM+AWWOTQA7Q0t1SB3SEqTBOwCjiDjoHSUuUUMW2w7BjD5/YqP8yBN2BatsYqq098Aj/TW4g9luAduEuZ/wL+fkyoz4nSeakghDzGyppOcUCNlTKvgce0/QSsh7VuVtPAXAwnx99NMDVxwJgkkbYd/qIeUIEqYZNMc0rh+wdhnwYueEpQIK4QzxhOS5UFFEwt6jFPhttg2oPtgVOttLjF+AN8IOZB5I5DHfEN6B7Mefe1FDwboaqNUxaDtpyWbf0CehD2arAaEtkRzUDXAZ1YYnoD+yL+kJMOW08cMa4EC4NAb9dFKQHXyRE7CN73pql/iB3ek9774wA4GO+Js5/piry3WMG9sJWJK4zgpKEO7qTYIm4wbYQt41TLCQqiZWwunYS5o76w4Ibs/ZbNyziR98QumeKX4JQL7A67iYkTph+pX14T92Pd7iB9hOySZTvVtiqoY5RGEwsscj80ihN1D66TsI2BM9Ba/WlanJMPvgtcm2BNgVc5x3QbaIzZN2C94OHLwB2xBj2ChcHV9ntPaj/j9u1XmUVuTsrE+x40A3tCvGChbLddlcaYC37EtE0DrmTtoVW7gnTSqXDk3guerOGcIbP2BWrdjMWh9XTMF/PvOKK/swaIzpNkAF++pvp3RccfjT4YrbIlcrHjOC29Lxc2LqDsu/q/qAdw/QMpS/8gb/2AAAAAAABJRU5ErkJggg=="
              alt=""
            />
          </li>

          <li>
            <a href="##">PROFILE NAME</a>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAApxJREFUSEudlv2V2jAQxH9bwbmDcBWYDgIVhFRw0AGp4EgF0EFIBXAVAB1AB3cdcBVs3kiyLIFJ3ov+sZ9s78fM7MiGlgGeLum+3y83wm5e/ZO/v1N/lSIbrpw3eR4HGkrb1T5QURk5P27ADoZfHb4D10dBb7sc6OAOiAY4gI0DlvAbWPZJHnVmAf3MwYP7GNwYZ57gB/ACTOtObgky7C532FDmzMEZaItPfwIz7RmcfSBJCpGFkwEviQVU+SvYyfCxwxxQsiPGulDAM25X8IKTrpwKoqrqxuDgME6vHoEF8A5sIzyhzo/ExavB1I1rLb341tBSwK+FSHXbKafF+MCZGTQeuxJkS4xjTpDlXpPcpPYvBmvvCboAK2BXVLM1WKRZUYI1oQObJinHFAXJSYoBFhGp67cEhdSi4ILu02ETuIizMIk+gOAST6O0FziJCWKWs0FbVD3F2OO2BVdyJdwYXN14EUSJl18FCOLnlKDbqLiCA5sYPnJjhIeqVMEyvuRjN77gYbhUYbfEy642s/DoLfFyB5HafgJ7A18lTJVg5REKdfFUkF8niA/EVyqw6iDU0bgxw60JRBlnPMyDFKLJOyaIPvEgWXW5z4NoXNR9eCdPVwYwe3aDszfYeCRWQRYYu8Iq9NXC4N2NFrdT4ukMdr114noOelltiWRqCbpTnOzsXVKaoNC8FLAUpeuM6VVUnzSGa4gUuPMhGdy8V5otAk+9VP9lFYMTrTPgCN4lkV0EWcpJE4wTwZJsPLRXQVQee/2DymNFsgyu1awkCcoEn4PBxemNQe+duLbrYetO6gpwWQsu7Edg877qG9z74X184AycUepEk6pB61x2QCD1l9WBc/dDURd2Q1L5KzLIXxTc8Gk6sPufvzN/AOKZFjC7ZYzgAAAAAElFTkSuQmCC"
              alt=""
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
