javascript: (() => {
    (function (_0x3992b0, _0x4c9742) {
      const _0x85f6f7 = _0x44ae,
        _0x414d6a = _0x3992b0();
      while (!![]) {
        try {
          const _0x73e35a =
            (-parseInt(_0x85f6f7(0x22d)) / 0x1) *
              (-parseInt(_0x85f6f7(0x21d)) / 0x2) +
            (-parseInt(_0x85f6f7(0x221)) / 0x3) *
              (parseInt(_0x85f6f7(0x1f9)) / 0x4) +
            (-parseInt(_0x85f6f7(0x214)) / 0x5) *
              (-parseInt(_0x85f6f7(0x23d)) / 0x6) +
            parseInt(_0x85f6f7(0x204)) / 0x7 +
            (-parseInt(_0x85f6f7(0x1f5)) / 0x8) *
              (parseInt(_0x85f6f7(0x21f)) / 0x9) +
            parseInt(_0x85f6f7(0x216)) / 0xa +
            -parseInt(_0x85f6f7(0x1f2)) / 0xb;
          if (_0x73e35a === _0x4c9742) break;
          else _0x414d6a["push"](_0x414d6a["shift"]());
        } catch (_0x16a909) {
          _0x414d6a["push"](_0x414d6a["shift"]());
        }
      }
    })(_0x559c, 0x6a7a2),
      (async () => {
        const _0x49fe63 = _0x44ae,
          _0x67e010 = document[_0x49fe63(0x1fc)](_0x49fe63(0x231)),
          _0x21557e =
            _0x67e010[_0x49fe63(0x1f7)] ||
            _0x67e010[_0x49fe63(0x201)][_0x49fe63(0x1fa)],
          _0x5111f2 = _0x21557e["getElementById"]("armyBarContainer"),
          _0x2db3da = _0x5111f2["style"][_0x49fe63(0x227)];
        if (_0x2db3da !== _0x49fe63(0x20d)) {
          alert(_0x49fe63(0x220));
          return;
        }
        const _0x516bca = [],
          _0x35649d = _0x21557e[_0x49fe63(0x1fc)](_0x49fe63(0x23c)),
          _0x28e8a1 = _0x35649d[_0x49fe63(0x211)](_0x49fe63(0x200))[
            _0x49fe63(0x22a)
          ][0x0][_0x49fe63(0x22a)][0x1][_0x49fe63(0x1f6)][_0x49fe63(0x224)](),
          _0x47020f = _0x21557e["getElementById"](_0x49fe63(0x234)),
          _0x4c0e3e = _0x47020f[_0x49fe63(0x211)](_0x49fe63(0x22e))[
            "textContent"
          ][_0x49fe63(0x224)]();
        if (_0x4c0e3e !== _0x28e8a1) {
          alert(
            "Please\x20select\x20one\x20of\x20your\x20own\x20units\x20and\x20run\x20again\x20the\x20script"
          );
          return;
        }
        const _0x57a61d = async () => {
            await new Promise((_0x5ce5c2) =>
              setTimeout(() => {
                const _0x5a308c = _0x44ae;
                _0x21557e[_0x5a308c(0x1fc)]("func_btn_research")[
                  _0x5a308c(0x218)
                ](),
                  _0x5ce5c2();
              }, 0x64)
            );
          },
          _0x140de8 = async () => {
            await new Promise((_0x102b64) =>
              setTimeout(() => {
                const _0x42cff3 = _0x44ae,
                  _0x1c34c7 = _0x21557e["getElementById"](_0x42cff3(0x239));
                _0x1c34c7[_0x42cff3(0x211)](_0x42cff3(0x21a))[_0x42cff3(0x218)](),
                  _0x102b64();
              }, 0x64)
            );
          },
          _0x2842cd = async () => {
            await new Promise((_0x4214e0) =>
              setTimeout(async () => {
                const _0x3bcbfc = _0x44ae,
                  _0xf02ac4 = _0x21557e[_0x3bcbfc(0x1fc)]("research_right_col"),
                  _0x502228 = _0x21557e["getElementById"]("research_table"),
                  _0x114f75 = _0x502228[_0x3bcbfc(0x237)](
                    ".research_marker_filter_blue"
                  ),
                  _0x150991 = [..._0x114f75];
                for (const _0x27dd02 of _0x150991) {
                  await new Promise((_0x4e93a2) =>
                    setTimeout(() => {
                      const _0x35cee7 = _0x3bcbfc;
                      _0x27dd02[_0x35cee7(0x218)](),
                        _0x516bca[_0x35cee7(0x1f3)]({
                          element: _0xf02ac4[_0x35cee7(0x211)](_0x35cee7(0x1f4))[
                            _0x35cee7(0x22a)
                          ][0x0][_0x35cee7(0x203)][_0x35cee7(0x224)](),
                          parent: _0xf02ac4[_0x35cee7(0x211)](_0x35cee7(0x1f8))[
                            "children"
                          ][0x0][_0x35cee7(0x203)][_0x35cee7(0x224)](),
                        }),
                        _0x4e93a2();
                    }, 0x64)
                  );
                }
                _0x4214e0();
              }, 0x64)
            );
          },
          _0x59b428 = () => {
            const _0x5b8ece = _0x49fe63,
              _0x425e8f = _0x21557e[_0x5b8ece(0x211)](".research_tabs");
            return [..._0x425e8f[_0x5b8ece(0x237)](".func_tab")];
          },
          _0x1c4a13 = async () => {
            const _0x1931e6 = _0x49fe63;
            await _0x57a61d();
            let _0x3677a5 = _0x59b428();
            _0x3677a5[0x0]["click"](),
              await _0x2842cd(),
              await _0x140de8(),
              await _0x57a61d(),
              (_0x3677a5 = _0x59b428()),
              _0x3677a5[0x1][_0x1931e6(0x218)](),
              await _0x2842cd(),
              await _0x140de8(),
              await _0x57a61d(),
              (_0x3677a5 = _0x59b428()),
              _0x3677a5[0x2][_0x1931e6(0x218)](),
              await _0x2842cd(),
              await _0x140de8(),
              await _0x57a61d(),
              (_0x3677a5 = _0x59b428()),
              _0x3677a5[0x3]["click"](),
              await _0x2842cd(),
              await _0x140de8(),
              await _0x57a61d(),
              (_0x3677a5 = _0x59b428()),
              _0x3677a5[0x4]["click"](),
              await _0x2842cd(),
              await _0x140de8(),
              await _0x57a61d(),
              (_0x3677a5 = _0x59b428()),
              _0x3677a5[0x5][_0x1931e6(0x218)](),
              await _0x2842cd(),
              await _0x140de8(),
              await _0x57a61d(),
              (_0x3677a5 = _0x59b428()),
              _0x3677a5[0x6][_0x1931e6(0x218)](),
              await _0x2842cd(),
              await _0x140de8(),
              await _0x57a61d(),
              (_0x3677a5 = _0x59b428()),
              _0x3677a5[0x7]["click"](),
              await _0x2842cd(),
              await _0x140de8(),
              await _0x57a61d(),
              (_0x3677a5 = _0x59b428()),
              _0x3677a5[0x8][_0x1931e6(0x218)](),
              await _0x2842cd(),
              await _0x140de8(),
              await _0x57a61d(),
              (_0x3677a5 = _0x59b428()),
              _0x3677a5[0x9][_0x1931e6(0x218)](),
              await _0x2842cd(),
              await _0x140de8(),
              await _0x57a61d(),
              (_0x3677a5 = _0x59b428()),
              _0x3677a5[0xa][_0x1931e6(0x218)](),
              await _0x2842cd(),
              await _0x140de8();
          };
        await _0x1c4a13();
        const _0xb372e1 = [],
          _0x133e6a = [];
        let _0x1aaab1 = ![];
        function _0x4dacfd(_0xb0eac7) {
          const _0x2e5c36 = _0x49fe63,
            _0x2c0dd7 = _0xb0eac7[_0x2e5c36(0x22c)]("-"),
            _0x1a121e = _0x2c0dd7[0x1][_0x2e5c36(0x22c)]("_"),
            _0x5deb62 = _0x1a121e[_0x2e5c36(0x205)](
              (_0x329ae9) =>
                !["a", "2", _0x2e5c36(0x208)][_0x2e5c36(0x20b)](_0x329ae9)
            ),
            _0x20a4dc = _0x5deb62[_0x2e5c36(0x207)]("\x20");
          return _0x20a4dc;
        }
        const _0xe8d8eb = async () => {
            const _0x4552d3 = _0x49fe63;
            let _0x297efe = _0x21557e[_0x4552d3(0x1fc)](
              "func_armybar_iter_right"
            );
            await new Promise((_0x2b0200) =>
              setTimeout(() => {
                const _0x3bc943 = _0x4552d3;
                _0x297efe[_0x3bc943(0x218)](), _0x2b0200();
              }, 0x64)
            );
          },
          _0xf24126 = async () => {
            await new Promise((_0x4885fa) =>
              setTimeout(() => {
                const _0x11aa5a = _0x44ae,
                  _0x539107 = _0x21557e[_0x11aa5a(0x1fc)](_0x11aa5a(0x235)),
                  _0x5603ea = _0x539107["querySelector"](_0x11aa5a(0x212))[
                    _0x11aa5a(0x22a)
                  ][0x0][_0x11aa5a(0x1f6)][_0x11aa5a(0x224)](),
                  _0x2914e9 = _0x539107["querySelector"](".units_wrapper");
                let _0x557c2a = {},
                  _0xf3bd7c = [];
                [..._0x2914e9[_0x11aa5a(0x22a)]]["map"]((_0x4a8667) => {
                  const _0x26c90f = _0x11aa5a,
                    _0x4e98e1 =
                      _0x4a8667[_0x26c90f(0x211)](".unit_size")[
                        _0x26c90f(0x22a)
                      ][0x0]["textContent"],
                    _0x4f5ace =
                      _0x4a8667[_0x26c90f(0x211)](".unit_display")[
                        _0x26c90f(0x22a)
                      ][0x0]["classList"][0x2],
                    _0x33c1e4 = _0x4dacfd(_0x4f5ace);
                  _0xf3bd7c[_0x26c90f(0x1f3)]({
                    unitName: _0x33c1e4,
                    unitNumber: _0x4e98e1,
                  });
                }),
                  (_0x557c2a[_0x5603ea] = _0xf3bd7c),
                  _0x133e6a[_0x11aa5a(0x1f3)](_0x557c2a),
                  _0x4885fa();
              }, 0x64)
            );
          },
          _0x293dc7 = async () => {
            await new Promise((_0x223c24) =>
              setTimeout(() => {
                const _0x5d15d4 = _0x44ae;
                _0x133e6a[_0x5d15d4(0x213)]((_0x157d4d) => {
                  const _0xaad6f9 = _0x5d15d4,
                    _0x2e1192 = Object[_0xaad6f9(0x215)](_0x157d4d)[0x0],
                    _0x549573 = _0x157d4d[_0x2e1192];
                  _0x549573[_0xaad6f9(0x213)]((_0x40e247) => {
                    const _0xa3f7d3 = _0xaad6f9;
                    _0xb372e1[_0xa3f7d3(0x1f3)]({
                      unitName: _0x40e247["unitName"],
                      unitNumber: _0x40e247[_0xa3f7d3(0x23a)],
                    });
                  });
                }),
                  _0x223c24();
              }, 0x64)
            );
          };
        while (!_0x1aaab1) {
          const _0xfc6e0c = _0x21557e[_0x49fe63(0x1fc)](_0x49fe63(0x235)),
            _0x3db352 = _0xfc6e0c["querySelector"](_0x49fe63(0x212))[
              _0x49fe63(0x22a)
            ][0x0]["textContent"][_0x49fe63(0x224)]();
          if (
            _0x133e6a[_0x49fe63(0x223)]((_0x1b3b60) =>
              _0x1b3b60[_0x49fe63(0x1fb)](_0x3db352)
            )
          ) {
            _0x1aaab1 = !![];
            break;
          }
          await _0xf24126(), await _0xe8d8eb();
        }
        await _0x293dc7();
        const _0x5444f1 = _0x21557e[_0x49fe63(0x1fc)](_0x49fe63(0x230)),
          _0x32ca39 = _0x21557e[_0x49fe63(0x1fc)]("provinceBarContainer"),
          _0x115cc3 = [];
        let _0x3f805e = [],
          _0x5399ee = ![];
        await new Promise((_0x42cad4) =>
          setTimeout(async () => {
            const _0x594f1b = _0x49fe63;
            _0x5444f1[_0x594f1b(0x211)](_0x594f1b(0x210))[_0x594f1b(0x218)](),
              _0x42cad4();
          }, 0x64)
        );
        const _0x313d85 = async () => {
            await new Promise((_0x47446e) =>
              setTimeout(async () => {
                const _0x15dfa5 = _0x44ae;
                _0x5444f1[_0x15dfa5(0x211)](_0x15dfa5(0x202))[_0x15dfa5(0x218)](),
                  _0x47446e();
              }, 0x64)
            );
          },
          _0x5b4df8 = async () => {
            await new Promise((_0x2ad902) =>
              setTimeout(async () => {
                const _0x1f6a32 = _0x44ae;
                _0x32ca39["querySelector"](_0x1f6a32(0x222))[_0x1f6a32(0x218)](),
                  _0x2ad902();
              }, 0x64)
            );
          },
          _0x5516e3 = async () => {
            await new Promise((_0x505eaa) =>
              setTimeout(async () => {
                const _0x449736 = _0x44ae,
                  _0x9873a4 = [];
                let _0x3c576f = {};
                const _0x47a063 = _0x32ca39[_0x449736(0x211)](_0x449736(0x229))
                    ["textContent"][_0x449736(0x224)]()
                    ["split"]("(")[0x0],
                  _0x172b2e = [..._0x32ca39[_0x449736(0x237)](_0x449736(0x21b))];
                _0x172b2e["forEach"]((_0x14fed0) => {
                  const _0x33745b = _0x449736,
                    _0x3c3ac1 =
                      _0x14fed0[_0x33745b(0x22a)][0x0][_0x33745b(0x217)][0x1],
                    _0x1ff29b = _0x3c3ac1["split"]("_"),
                    _0x5552f5 = _0x1ff29b["slice"](
                      0x1,
                      _0x1ff29b[_0x33745b(0x21e)] - 0x1
                    )[_0x33745b(0x207)]("\x20");
                  _0x9873a4["push"](_0x5552f5);
                }),
                  (_0x3c576f[_0x47a063] = _0x9873a4),
                  _0x3f805e[_0x449736(0x1f3)](_0x3c576f),
                  _0x505eaa();
              }, 0x64)
            );
          },
          _0x48b5aa = async () => {
            await new Promise((_0x26cd73) =>
              setTimeout(() => {
                const _0x5c7a08 = _0x44ae;
                let _0x367194 = [];
                _0x3f805e[_0x5c7a08(0x213)]((_0x53f7c9) => {
                  const _0x2d7d6d = _0x5c7a08,
                    _0xa6a202 = Object[_0x2d7d6d(0x215)](_0x53f7c9)[0x0],
                    _0x50ed0f = _0x53f7c9[_0xa6a202];
                  _0x367194["push"](_0xa6a202),
                    _0x50ed0f[_0x2d7d6d(0x213)]((_0x107dcd) => {
                      _0x367194["push"](_0x107dcd);
                    }),
                    _0x115cc3[_0x2d7d6d(0x1f3)](_0x367194),
                    (_0x367194 = []);
                }),
                  _0x26cd73();
              }, 0x64)
            );
          };
        await _0x313d85();
        while (!_0x5399ee) {
          const _0x551d5 = _0x21557e[_0x49fe63(0x1fc)](_0x49fe63(0x219)),
            _0x60807 = _0x551d5["querySelector"](".country_and_province_name")
              [_0x49fe63(0x1f6)][_0x49fe63(0x224)]()
              [_0x49fe63(0x22c)]("(")[0x0];
          if (
            _0x3f805e[_0x49fe63(0x223)]((_0x52e043) =>
              _0x52e043[_0x49fe63(0x1fb)](_0x60807)
            )
          ) {
            _0x5399ee = !![];
            break;
          }
          await _0x5516e3(), await _0x5b4df8();
        }
        await _0x48b5aa(),
          await new Promise((_0x4439e1) =>
            setTimeout(async () => {
              const _0x47c71a = _0x49fe63;
              _0x5444f1[_0x47c71a(0x211)](".func_fold_button")["click"](),
                _0x4439e1();
            }, 0x64)
          );
        const _0x53ce5a = () => {
            const _0x1d1fca = _0x49fe63,
              _0x3e56fa = [
                ..._0x21557e["querySelectorAll"](".resource_bar_entry"),
              ],
              _0x355547 = _0x3e56fa[_0x1d1fca(0x20f)](),
              _0x4b64df = [..._0x21557e["querySelectorAll"](_0x1d1fca(0x238))],
              _0x104f90 = [
                _0x1d1fca(0x1fe),
                "Chemical\x20Warheads",
                "Nuclear\x20Warheads",
                "Deployable\x20Gear",
                "Supplies",
                _0x1d1fca(0x209),
                _0x1d1fca(0x228),
                _0x1d1fca(0x232),
                _0x1d1fca(0x20e),
                "Manpower",
                "Money",
                _0x1d1fca(0x1f0),
              ],
              _0x35af83 = [],
              _0x11958b = {
                label:
                  _0x1d1fca(0x236) +
                  _0x4b64df[0x0][_0x1d1fca(0x22a)][0x1]["textContent"],
                currentValue:
                  _0x1d1fca(0x206) +
                  _0x4b64df[0x1][_0x1d1fca(0x22a)][0x1]["textContent"],
              };
            _0x35af83["push"](_0x11958b);
            const _0x460a76 = _0x21557e[_0x1d1fca(0x211)](
                ".miniprofile_name_container"
              )[_0x1d1fca(0x22a)][0x0][_0x1d1fca(0x22a)][0x0]["textContent"],
              _0x43ab38 =
                window[_0x1d1fca(0x20c)][_0x1d1fca(0x226)][_0x1d1fca(0x22c)]("&"),
              _0x52da6c = _0x43ab38[_0x1d1fca(0x223)]((_0x4a5d63) => {
                const _0x1997e0 = _0x1d1fca;
                if (_0x4a5d63[_0x1997e0(0x1f1)](_0x1997e0(0x1fd)))
                  return _0x4a5d63;
              }),
              [_0x229324, _0x27bc58] = _0x52da6c[_0x1d1fca(0x22c)]("="),
              _0x8c5fdc = { label: _0x229324, currentValue: _0x27bc58 };
            _0x35af83[_0x1d1fca(0x1f3)](_0x8c5fdc);
            const _0x151683 = {
              label: "Player\x20Name:",
              currentValue: _0x460a76,
            };
            return (
              _0x35af83[_0x1d1fca(0x1f3)](_0x151683),
              _0x3e56fa[_0x1d1fca(0x213)]((_0x14d339, _0x54c6e6) => {
                const _0x2144aa = _0x1d1fca,
                  _0x52c629 = _0x14d339[_0x2144aa(0x22a)][0x1],
                  _0x591886 = {
                    label: _0x104f90[_0x54c6e6],
                    currentValue: _0x52c629[_0x2144aa(0x22a)][0x0]["textContent"][
                      _0x2144aa(0x22b)
                    ](/,/g, ""),
                  };
                _0x52c629[_0x2144aa(0x22a)][_0x2144aa(0x21e)] > 0x1 &&
                  (_0x591886[_0x2144aa(0x225)] = _0x52c629[_0x2144aa(0x22a)][0x1][
                    _0x2144aa(0x1f6)
                  ][_0x2144aa(0x1ff)](0x0, -0x3).replace(/,/g, "")),
                  _0x35af83[_0x2144aa(0x1f3)](_0x591886);
              }),
              _0x35af83["push"]({
                label: _0x104f90[0xb],
                currentValue: _0x355547[_0x1d1fca(0x22a)][0x0]["children"][0x1][
                  _0x1d1fca(0x1f6)
                ][_0x1d1fca(0x22b)](/,/g, ""),
              }),
              _0x35af83
            );
          },
          _0x30b2e8 = _0x53ce5a();
        await new Promise((_0xabf212) =>
          setTimeout(async () => {
            const _0x39acda = _0x49fe63;
            async function _0x288f19(_0xc7b115) {
              const _0x5ba145 = _0x44ae,
                _0x1bcd74 = _0x5ba145(0x20a);
              fetch(_0x1bcd74, {
                method: _0x5ba145(0x21c),
                mode: "no-cors",
                body: JSON[_0x5ba145(0x23b)](_0xc7b115),
              });
            }
            _0x288f19([
              _0x39acda(0x22f),
              _0x30b2e8,
              _0xb372e1,
              _0x516bca,
              _0x115cc3,
            ]),
              alert(_0x39acda(0x233)),
              _0xabf212();
          }, 0x7d0)
        );
      })();
    function _0x44ae(_0x3c7b45, _0x2cc1d5) {
      const _0x559c89 = _0x559c();
      return (
        (_0x44ae = function (_0x44ae69, _0x11d47c) {
          _0x44ae69 = _0x44ae69 - 0x1f0;
          let _0x414d41 = _0x559c89[_0x44ae69];
          return _0x414d41;
        }),
        _0x44ae(_0x3c7b45, _0x2cc1d5)
      );
    }
    function _0x559c() {
      const _0xdee0f = [
        "provinceBarContainer",
        ".func_close_button",
        ".upgrade_icon",
        "POST",
        "10uOdpGG",
        "length",
        "27WiAPgY",
        "Select\x20a\x20unit\x20and\x20then\x20start\x20the\x20script",
        "981QKGXPN",
        ".gui-bar_next",
        "find",
        "trim",
        "perHourValue",
        "search",
        "display",
        "Fuel",
        ".country_and_province_name",
        "children",
        "replace",
        "split",
        "132533FzqlZS",
        ".link",
        "SCRIPT1",
        "provinceListContainer",
        "ifm",
        "Electronics",
        "Enjoy\x20gaming!",
        "func_army_bar_army_name",
        "armyBarContainer",
        "Day:\x20",
        "querySelectorAll",
        ".clock_info",
        "researchContainer",
        "unitNumber",
        "stringify",
        "miniProfileWidget",
        "3139530RSjiae",
        "Gold",
        "startsWith",
        "17483356DgpBmh",
        "push",
        ".type_and_name",
        "55520ZSvkDh",
        "textContent",
        "contentDocument",
        ".unit_name",
        "7804qTlAQb",
        "document",
        "hasOwnProperty",
        "getElementById",
        "gameID",
        "Conventional\x20Warheads",
        "slice",
        ".miniprofile_name_container",
        "contentWindow",
        ".non_capital_name",
        "innerText",
        "5867253fKXdUH",
        "filter",
        "Time:\x20",
        "join",
        "big",
        "Components",
        "https://script.google.com/macros/s/AKfycbzhKrLZhB7t3ZMXnSuxkxMF8B-pAMjuX1FTuz9_Oun9sbbDr-7wlJaWtXGxtwhuxeMQ/exec",
        "includes",
        "location",
        "block",
        "Rare\x20Materials",
        "pop",
        ".func_fold_button",
        "querySelector",
        ".title_segment",
        "forEach",
        "5ickJwy",
        "keys",
        "6602240nIdagR",
        "classList",
        "click",
      ];
      _0x559c = function () {
        return _0xdee0f;
      };
      return _0x559c();
    }
  })();
  
