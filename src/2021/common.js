const data = {
    day1: [157 ,158 ,167 ,157 ,148 ,154 ,155 ,156 ,151 ,126 ,125 ,119 ,128 ,136 ,135 ,144 ,159 ,157 ,164 ,163 ,165 ,166 ,163 ,186 ,194 ,197 ,188 ,203 ,225 ,228 ,248 ,263 ,253 ,280 ,279 ,277 ,281 ,282 ,286 ,290 ,292 ,275 ,274 ,282 ,293 ,301 ,307 ,305 ,300 ,296 ,301 ,310 ,302 ,299 ,300 ,308 ,306 ,327 ,329 ,323 ,320 ,324 ,327 ,340 ,336 ,343 ,344 ,345 ,346 ,347 ,365 ,368 ,372 ,373 ,372 ,371 ,380 ,379 ,357 ,380 ,382 ,392 ,400 ,375 ,376 ,374 ,373 ,376 ,394 ,407 ,408 ,406 ,407 ,405 ,406 ,405 ,415 ,399 ,409 ,405 ,406 ,416 ,422 ,423 ,430 ,435 ,437 ,438 ,406 ,413 ,414 ,413 ,429 ,430 ,459 ,454 ,442 ,451 ,473 ,459 ,433 ,434 ,436 ,438 ,441 ,448 ,456 ,460 ,461 ,470 ,469 ,481 ,504 ,502 ,497 ,499 ,498 ,501 ,510 ,516 ,529 ,531 ,533 ,528 ,531 ,529 ,542 ,543 ,546 ,557 ,569 ,571 ,572 ,567 ,564 ,570 ,563 ,581 ,580 ,581 ,574 ,576 ,600 ,596 ,599 ,603 ,593 ,591 ,592 ,591 ,590 ,593 ,598 ,572 ,564 ,566 ,568 ,595 ,617 ,618 ,617 ,616 ,617 ,600 ,634 ,616 ,630 ,595 ,576 ,549 ,548 ,560 ,574 ,580 ,586 ,575 ,578 ,580 ,581 ,582 ,585 ,595 ,599 ,601 ,598 ,603 ,604 ,602 ,607 ,630 ,643 ,648 ,649 ,650 ,651 ,650 ,657 ,658 ,681 ,683 ,686 ,681 ,682 ,684 ,686 ,670 ,669 ,670 ,665 ,671 ,695 ,683 ,709 ,708 ,717 ,714 ,720 ,711 ,715 ,716 ,717 ,719 ,721 ,727 ,728 ,729 ,707 ,706 ,684 ,682 ,689 ,691 ,692 ,703 ,715 ,716 ,710 ,716 ,719 ,720 ,712 ,722 ,723 ,731 ,732 ,741 ,747 ,723 ,751 ,748 ,759 ,766 ,768 ,767 ,749 ,750 ,753 ,754 ,778 ,786 ,788 ,794 ,815 ,830 ,832 ,839 ,849 ,848 ,837 ,836 ,846 ,831 ,813 ,814 ,798 ,814 ,827 ,822 ,830 ,831 ,832 ,841 ,848 ,851 ,847 ,845 ,847 ,846 ,831 ,813 ,816 ,809 ,815 ,821 ,823 ,822 ,831 ,834 ,862 ,863 ,866 ,868 ,872 ,873 ,859 ,852 ,853 ,863 ,862 ,869 ,883 ,887 ,888 ,903 ,934 ,932 ,931 ,932 ,922 ,933 ,937 ,936 ,934 ,939 ,948 ,949 ,951 ,949 ,968 ,974 ,963 ,954 ,940 ,955 ,956 ,971 ,970 ,966 ,965 ,973 ,1000 ,998 ,1006 ,1020 ,1035 ,1036 ,1043 ,1052 ,1054 ,1058 ,1056 ,1055 ,1054 ,1055 ,1067 ,1045 ,1051 ,1050 ,1046 ,1045 ,1043 ,1044 ,1041 ,1044 ,1030 ,1034 ,1037 ,1036 ,1030 ,1037 ,1027 ,1026 ,1022 ,1024 ,1014 ,1016 ,1018 ,990 ,992 ,991 ,992 ,997 ,1023 ,1024 ,1016 ,1018 ,1027 ,1024 ,1026 ,1006 ,1000 ,999 ,1004 ,1005 ,1006 ,1021 ,1022 ,1024 ,1023 ,1021 ,1029 ,1047 ,1062 ,1036 ,1039 ,1053 ,1058 ,1062 ,1051 ,1049 ,1060 ,1069 ,1071 ,1072 ,1063 ,1071 ,1076 ,1082 ,1084 ,1071 ,1080 ,1082 ,1083 ,1084 ,1100 ,1096 ,1095 ,1107 ,1122 ,1120 ,1128 ,1127 ,1109 ,1123 ,1122 ,1125 ,1111 ,1112 ,1109 ,1114 ,1103 ,1104 ,1106 ,1107 ,1110 ,1104 ,1083 ,1086 ,1083 ,1060 ,1061 ,1070 ,1051 ,1016 ,1013 ,1012 ,1013 ,1008 ,1021 ,1022 ,1017 ,1018 ,1012 ,1010 ,1014 ,1007 ,1004 ,1015 ,1018 ,1022 ,1016 ,1040 ,1039 ,1055 ,1057 ,1054 ,1067 ,1066 ,1074 ,1075 ,1079 ,1086 ,1087 ,1074 ,1075 ,1076 ,1084 ,1070 ,1076 ,1075 ,1072 ,1081 ,1097 ,1098 ,1095 ,1077 ,1055 ,1056 ,1058 ,1074 ,1075 ,1074 ,1084 ,1085 ,1099 ,1092 ,1093 ,1094 ,1053 ,1049 ,1068 ,1069 ,1067 ,1069 ,1081 ,1092 ,1104 ,1121 ,1124 ,1125 ,1123 ,1106 ,1143 ,1133 ,1134 ,1116 ,1134 ,1136 ,1137 ,1139 ,1138 ,1142 ,1143 ,1155 ,1156 ,1157 ,1146 ,1156 ,1157 ,1180 ,1200 ,1189 ,1188 ,1187 ,1189 ,1198 ,1203 ,1204 ,1198 ,1219 ,1213 ,1215 ,1220 ,1222 ,1223 ,1224 ,1227 ,1236 ,1232 ,1233 ,1236 ,1238 ,1239 ,1244 ,1245 ,1246 ,1211 ,1213 ,1217 ,1222 ,1218 ,1219 ,1227 ,1228 ,1242 ,1244 ,1243 ,1240 ,1245 ,1244 ,1252 ,1244 ,1242 ,1243 ,1242 ,1252 ,1261 ,1269 ,1284 ,1290 ,1291 ,1292 ,1293 ,1290 ,1292 ,1293 ,1294 ,1298 ,1303 ,1304 ,1308 ,1294 ,1291 ,1292 ,1289 ,1274 ,1281 ,1282 ,1304 ,1305 ,1303 ,1304 ,1285 ,1286 ,1281 ,1284 ,1292 ,1285 ,1281 ,1282 ,1279 ,1287 ,1298 ,1319 ,1311 ,1309 ,1342 ,1325 ,1334 ,1331 ,1340 ,1341 ,1342 ,1343 ,1344 ,1345 ,1332 ,1333 ,1338 ,1340 ,1375 ,1331 ,1357 ,1351 ,1366 ,1362 ,1360 ,1336 ,1334 ,1335 ,1336 ,1333 ,1336 ,1330 ,1335 ,1334 ,1328 ,1329 ,1323 ,1337 ,1338 ,1333 ,1322 ,1326 ,1323 ,1324 ,1323 ,1332 ,1336 ,1341 ,1332 ,1367 ,1370 ,1371 ,1372 ,1385 ,1391 ,1414 ,1399 ,1400 ,1398 ,1399 ,1388 ,1386 ,1384 ,1383 ,1412 ,1416 ,1417 ,1416 ,1419 ,1407 ,1414 ,1424 ,1423 ,1417 ,1439 ,1451 ,1450 ,1455 ,1453 ,1456 ,1449 ,1464 ,1467 ,1468 ,1473 ,1470 ,1472 ,1473 ,1474 ,1470 ,1456 ,1472 ,1452 ,1447 ,1469 ,1471 ,1452 ,1453 ,1454 ,1461 ,1462 ,1463 ,1478 ,1482 ,1477 ,1476 ,1482 ,1483 ,1489 ,1490 ,1484 ,1485 ,1484 ,1486 ,1469 ,1476 ,1479 ,1478 ,1480 ,1479 ,1469 ,1467 ,1477 ,1495 ,1494 ,1480 ,1474 ,1475 ,1483 ,1497 ,1499 ,1487 ,1480 ,1481 ,1479 ,1512 ,1514 ,1516 ,1519 ,1521 ,1513 ,1516 ,1521 ,1522 ,1529 ,1521 ,1524 ,1526 ,1525 ,1526 ,1527 ,1526 ,1527 ,1529 ,1535 ,1547 ,1548 ,1552 ,1555 ,1559 ,1561 ,1571 ,1572 ,1571 ,1573 ,1577 ,1580 ,1579 ,1580 ,1581 ,1561 ,1565 ,1567 ,1562 ,1573 ,1584 ,1586 ,1578 ,1581 ,1583 ,1582 ,1573 ,1596 ,1597 ,1598 ,1609 ,1615 ,1620 ,1610 ,1616 ,1607 ,1609 ,1593 ,1598 ,1599 ,1603 ,1604 ,1597 ,1602 ,1615 ,1618 ,1627 ,1625 ,1619 ,1618 ,1614 ,1617 ,1616 ,1610 ,1630 ,1639 ,1642 ,1646 ,1648 ,1645 ,1656 ,1658 ,1652 ,1644 ,1645 ,1657 ,1656 ,1690 ,1691 ,1692 ,1701 ,1717 ,1715 ,1718 ,1712 ,1711 ,1710 ,1709 ,1715 ,1712 ,1723 ,1722 ,1725 ,1720 ,1711 ,1710 ,1713 ,1717 ,1718 ,1730 ,1722 ,1700 ,1715 ,1740 ,1743 ,1742 ,1740 ,1743 ,1749 ,1752 ,1751 ,1754 ,1762 ,1775 ,1776 ,1808 ,1805 ,1806 ,1802 ,1800 ,1802 ,1812 ,1809 ,1810 ,1806 ,1807 ,1826 ,1823 ,1826 ,1828 ,1824 ,1830 ,1839 ,1842 ,1814 ,1815 ,1818 ,1824 ,1825 ,1826 ,1859 ,1834 ,1837 ,1841 ,1849 ,1865 ,1878 ,1875 ,1876 ,1888 ,1889 ,1906 ,1908 ,1911 ,1912 ,1916 ,1920 ,1929 ,1933 ,1923 ,1920 ,1931 ,1926 ,1927 ,1917 ,1914 ,1912 ,1904 ,1910 ,1911 ,1902 ,1899 ,1894 ,1886 ,1889 ,1885 ,1887 ,1898 ,1899 ,1893 ,1881 ,1905 ,1904 ,1930 ,1931 ,1928 ,1926 ,1923 ,1889 ,1849 ,1839 ,1841 ,1842 ,1835 ,1836 ,1808 ,1801 ,1800 ,1793 ,1798 ,1804 ,1823 ,1808 ,1809 ,1820 ,1828 ,1831 ,1819 ,1820 ,1824 ,1817 ,1819 ,1815 ,1810 ,1802 ,1819 ,1835 ,1838 ,1829 ,1824 ,1822 ,1829 ,1837 ,1867 ,1870 ,1869 ,1876 ,1878 ,1873 ,1874 ,1884 ,1882 ,1859 ,1844 ,1840 ,1860 ,1844 ,1852 ,1849 ,1860 ,1861 ,1864 ,1855 ,1854 ,1850 ,1855 ,1859 ,1849 ,1853 ,1871 ,1870 ,1843 ,1839 ,1844 ,1848 ,1854 ,1839 ,1841 ,1862 ,1863 ,1869 ,1870 ,1872 ,1877 ,1879 ,1878 ,1873 ,1877 ,1885 ,1884 ,1883 ,1889 ,1897 ,1896 ,1902 ,1899 ,1900 ,1897 ,1891 ,1895 ,1908 ,1911 ,1917 ,1927 ,1926 ,1929 ,1935 ,1937 ,1935 ,1932 ,1934 ,1936 ,1932 ,1929 ,1932 ,1941 ,1960 ,1953 ,1956 ,1954 ,1966 ,1967 ,1994 ,2002 ,1994 ,2002 ,2016 ,2020 ,2014 ,2001 ,1964 ,1972 ,1973 ,1972 ,1968 ,1969 ,1968 ,1966 ,1953 ,1954 ,1963 ,1962 ,1963 ,1964 ,1960 ,1949 ,1950 ,1954 ,1957 ,1958 ,1960 ,1964 ,1995 ,1997 ,1984 ,1983 ,2005 ,2010 ,2026 ,2034 ,2035 ,2036 ,2034 ,2037 ,2040 ,2044 ,2052 ,2054 ,2081 ,2083 ,2085 ,2086 ,2088 ,2090 ,2089 ,2092 ,2086 ,2088 ,2091 ,2087 ,2090 ,2093 ,2085 ,2086 ,2096 ,2125 ,2132 ,2142 ,2165 ,2169 ,2170 ,2167 ,2168 ,2169 ,2168 ,2158 ,2162 ,2171 ,2169 ,2165 ,2166 ,2164 ,2178 ,2194 ,2190 ,2189 ,2202 ,2205 ,2207 ,2226 ,2227 ,2226 ,2210 ,2209 ,2208 ,2231 ,2232 ,2246 ,2251 ,2250 ,2254 ,2250 ,2249 ,2245 ,2246 ,2247 ,2267 ,2264 ,2259 ,2287 ,2263 ,2274 ,2277 ,2237 ,2242 ,2256 ,2277 ,2278 ,2292 ,2293 ,2306 ,2323 ,2326 ,2300 ,2296 ,2297 ,2318 ,2320 ,2322 ,2326 ,2324 ,2325 ,2331 ,2355 ,2357 ,2380 ,2375 ,2378 ,2391 ,2395 ,2403 ,2404 ,2409 ,2410 ,2405 ,2406 ,2401 ,2404 ,2406 ,2424 ,2418 ,2405 ,2404 ,2401 ,2403 ,2409 ,2401 ,2385 ,2386 ,2389 ,2385 ,2388 ,2404 ,2405 ,2412 ,2414 ,2430 ,2429 ,2403 ,2402 ,2407 ,2408 ,2410 ,2399 ,2374 ,2403 ,2416 ,2431 ,2433 ,2434 ,2438 ,2439 ,2453 ,2455 ,2456 ,2457 ,2464 ,2465 ,2464 ,2465 ,2469 ,2464 ,2472 ,2458 ,2446 ,2448 ,2447 ,2457 ,2481 ,2470 ,2479 ,2502 ,2521 ,2538 ,2527 ,2522 ,2528 ,2516 ,2519 ,2517 ,2530 ,2538 ,2537 ,2544 ,2545 ,2547 ,2572 ,2555 ,2550 ,2551 ,2552 ,2553 ,2555 ,2558 ,2559 ,2558 ,2560 ,2546 ,2540 ,2546 ,2545 ,2548 ,2554 ,2556 ,2557 ,2553 ,2581 ,2608 ,2617 ,2613 ,2604 ,2643 ,2650 ,2651 ,2646 ,2647 ,2648 ,2653 ,2642 ,2644 ,2645 ,2642 ,2639 ,2661 ,2656 ,2655 ,2653 ,2654 ,2655 ,2643 ,2660 ,2662 ,2659 ,2658 ,2659 ,2660 ,2661 ,2642 ,2652 ,2650 ,2657 ,2650 ,2644 ,2620 ,2636 ,2635 ,2636 ,2637 ,2611 ,2608 ,2594 ,2603 ,2605 ,2604 ,2605 ,2602 ,2573 ,2562 ,2559 ,2560 ,2548 ,2558 ,2562 ,2566 ,2567 ,2569 ,2574 ,2601 ,2611 ,2613 ,2629 ,2618 ,2607 ,2609 ,2611 ,2613 ,2617 ,2629 ,2618 ,2625 ,2631 ,2637 ,2642 ,2633 ,2622 ,2623 ,2617 ,2607 ,2617 ,2615 ,2616 ,2617 ,2622 ,2635 ,2637 ,2639 ,2640 ,2643 ,2644 ,2645 ,2647 ,2641 ,2640 ,2658 ,2657 ,2656 ,2661 ,2663 ,2670 ,2672 ,2678 ,2685 ,2686 ,2683 ,2684 ,2687 ,2689 ,2691 ,2703 ,2708 ,2714 ,2718 ,2717 ,2720 ,2740 ,2741 ,2749 ,2732 ,2738 ,2744 ,2749 ,2750 ,2747 ,2738 ,2733 ,2760 ,2747 ,2748 ,2749 ,2750 ,2759 ,2767 ,2771 ,2778 ,2776 ,2774 ,2758 ,2750 ,2751 ,2753 ,2755 ,2766 ,2774 ,2778 ,2772 ,2776 ,2775 ,2777 ,2774 ,2794 ,2795 ,2796 ,2799 ,2800 ,2797 ,2827 ,2824 ,2825 ,2830 ,2841 ,2839 ,2838 ,2840 ,2835 ,2836 ,2853 ,2852 ,2869 ,2877 ,2890 ,2892 ,2889 ,2894 ,2904 ,2901 ,2907 ,2911 ,2915 ,2924 ,2932 ,2933 ,2912 ,2928 ,2931 ,2939 ,2941 ,2940 ,2941 ,2931 ,2930 ,2926 ,2897 ,2899 ,2887 ,2879 ,2899 ,2898 ,2903 ,2908 ,2911 ,2910 ,2927 ,2930 ,2923 ,2933 ,2945 ,2961 ,2971 ,2972 ,2973 ,2974 ,2973 ,2987 ,2989 ,2988 ,2992 ,3003 ,2995 ,2996 ,2983 ,2984 ,2989 ,2998 ,3007 ,3006 ,2991 ,3023 ,3013 ,3004 ,3006 ,3017 ,3021 ,3033 ,3031 ,3034 ,3018 ,3017 ,3019 ,3017 ,3023 ,3046 ,3059 ,3066 ,3063 ,3060 ,3058 ,3061 ,3062 ,3070 ,3078 ,3082 ,3087 ,3090 ,3118 ,3117 ,3125 ,3127 ,3133 ,3138 ,3154 ,3146 ,3147 ,3141 ,3149 ,3157 ,3160 ,3166 ,3174 ,3187 ,3188 ,3200 ,3203 ,3218 ,3221 ,3220 ,3248 ,3249 ,3244 ,3241 ,3242 ,3240 ,3214 ,3213 ,3230 ,3229 ,3227 ,3223 ,3219 ,3210 ,3224 ,3220 ,3240 ,3232 ,3229 ,3218 ,3224 ,3242 ,3241 ,3244 ,3267 ,3281 ,3286 ,3287 ,3303 ,3304 ,3314 ,3318 ,3307 ,3292 ,3331 ,3332 ,3334 ,3339 ,3348 ,3356 ,3374 ,3405 ,3406 ,3408 ,3411 ,3407 ,3399 ,3402 ,3403 ,3405 ,3395 ,3394 ,3393 ,3394 ,3382 ,3388 ,3374 ,3376 ,3371 ,3373 ,3403 ,3404 ,3395 ,3401 ,3418 ,3419 ,3420 ,3423 ,3424 ,3412 ,3401 ,3402 ,3401 ,3413 ,3419 ,3421 ,3391 ,3384 ,3392 ,3393 ,3401 ,3404 ,3407 ,3408 ,3410 ,3426 ,3427 ,3431 ,3430 ,3448 ,3449 ,3451 ,3458 ,3463 ,3443 ,3442 ,3432 ,3423 ,3437 ,3439 ,3419 ,3426 ,3427 ,3426 ,3425 ,3426 ,3428 ,3429 ,3436 ,3435 ,3443 ,3433 ,3448 ,3446 ,3449 ,3445 ,3439 ,3447 ,3440 ,3456 ,3443 ,3467 ,3478 ,3473 ,3487 ,3486 ,3484 ,3494 ,3492 ,3489 ,3497 ,3500 ,3488 ,3487 ,3488 ,3491 ,3487 ,3511 ,3520 ,3515 ,3512 ,3504 ,3509 ,3502 ,3505 ,3508 ,3511 ,3512 ,3513 ,3515 ,3516 ,3519 ,3524 ,3519 ,3520 ,3518 ,3529 ,3535 ,3539 ,3551 ,3560 ,3559 ,3567 ,3571 ,3569 ,3570 ,3556 ,3559 ,3538 ,3541 ,3542 ,3548 ,3535 ,3533 ,3539 ,3549 ,3545 ,3546 ,3541 ,3527 ,3528 ,3564 ,3565 ,3568 ,3571 ,3569 ,3574 ,3578 ,3583 ,3585 ,3601 ,3598 ,3620 ,3621 ,3638 ,3621 ,3623 ,3602 ,3605 ,3600 ,3601 ,3602 ,3582 ,3584 ,3574 ,3570 ,3572 ,3563 ,3564 ,3565 ,3557 ,3556 ,3557 ,3558 ,3555 ,3560 ,3565 ,3564 ,3552 ,3560 ,3559 ,3589 ,3592 ,3590 ,3605 ,3617 ,3599 ,3600 ,3608 ,3589 ,3593 ,3600 ,3598 ,3596 ,3597 ,3598 ,3610 ,3611 ,3631 ,3637 ,3660 ,3661 ,3673 ,3680 ,3681 ,3680 ,3676 ,3677 ,3678 ,3664 ,3656 ,3655 ,3640 ,3637 ,3635 ,3636 ,3639 ,3621 ,3608 ,3592 ,3606 ,3605 ,3601 ,3603 ,3620 ,3619 ,3617 ,3609 ,3612 ,3610 ,3599 ,3606 ,3602 ,3605 ,3604 ,3606 ,3615 ,3617 ,3619 ,3620 ,3626 ,3627 ,3626 ,3625 ,3640 ,3653 ,3625 ,3617 ,3620 ,3623 ,3633 ,3627 ,3598 ,3607 ,3606 ,3611 ,3610 ,3609 ,3611 ,3612 ,3620 ,3621 ,3602 ,3593 ,3594 ,3593 ,3594 ,3602 ,3603 ,3610 ,3596 ,3600 ,3604 ,3601 ,3604 ,3605 ,3582 ,3579 ,3568 ,3569 ,3576 ,3584 ,3586 ,3566 ,3563 ,3571 ,3581 ,3586 ,3601 ,3584 ,3574 ,3585 ,3574 ,3584 ,3581 ,3585 ,3576 ,3578 ,3593 ,3618 ,3623 ,3624 ,3628 ,3636 ,3638 ,3643 ,3648 ,3641 ,3664 ,3662 ,3675 ,3690 ,3697 ,3698 ,3695 ,3696 ,3694 ,3685 ,3686 ,3687 ,3684 ,3693 ,3687 ,3704 ,3710 ,3711 ,3715 ,3710 ,3705 ,3692 ,3704 ,3709 ,3724 ,3725 ,3729 ,3722 ,3723 ,3712 ,3716 ,3717 ,3741 ,3714 ,3700 ,3716 ,3710 ,3711 ,3733 ,3734 ,3737 ,3728 ,3729 ,3739 ,3743 ,3746 ,3756 ,3763 ,3794 ,3798],
    day2: ["forward 4", "down 9", "forward 2", "forward 2", "down 7", "up 2", "down 9", "up 8", "down 7", "down 9", "forward 4", "up 6", "down 2", "down 5", "down 1", "down 5", "forward 2", "up 4", "forward 2", "forward 3", "up 2", "forward 6", "up 8", "forward 8", "down 8", "up 8", "down 7", "down 2", "down 9", "forward 2", "forward 9", "down 4", "forward 8", "up 6", "down 3", "up 9", "forward 1", "forward 6", "up 3", "forward 8", "up 9", "forward 1", "down 9", "down 3", "down 7", "up 2", "up 7", "down 5", "forward 3", "down 1", "up 6", "down 2", "forward 4", "down 6", "down 8", "forward 2", "down 5", "forward 6", "down 5", "down 7", "forward 8", "forward 2", "down 9", "up 4", "forward 6", "forward 4", "up 6", "down 9", "down 7", "down 9", "forward 9", "forward 8", "down 7", "up 7", "forward 9", "forward 8", "up 1", "up 4", "down 3", "forward 6", "up 6", "down 2", "up 3", "down 6", "down 5", "forward 8", "forward 3", "forward 8", "down 4", "down 4", "down 5", "forward 6", "down 5", "forward 6", "down 2", "down 5", "up 4", "down 8", "up 5", "forward 5", "forward 6", "down 9", "up 5", "down 2", "forward 5", "down 7", "up 7", "down 9", "forward 2", "down 3", "down 3", "forward 8", "up 5", "up 1", "forward 1", "forward 3", "down 5", "forward 8", "forward 7", "forward 8", "down 5", "down 8", "up 2", "forward 8", "forward 8", "down 7", "forward 1", "forward 7", "down 6", "up 4", "forward 7", "forward 7", "down 3", "up 7", "forward 2", "down 7", "down 4", "forward 5", "down 8", "forward 9", "down 7", "forward 5", "up 6", "up 6", "down 8", "down 3", "forward 5", "forward 3", "down 8", "up 7", "forward 8", "up 6", "down 2", "forward 4", "up 3", "up 3", "down 9", "down 9", "up 1", "up 7", "forward 2", "down 1", "forward 9", "up 7", "up 6", "down 2", "down 3", "forward 4", "down 3", "down 3", "down 1", "forward 4", "forward 8", "forward 6", "forward 3", "up 4", "up 5", "up 4", "forward 1", "up 3", "down 9", "up 6", "forward 2", "down 5", "down 1", "forward 8", "forward 2", "down 6", "up 5", "up 3", "forward 7", "forward 2", "forward 7", "up 9", "forward 3", "up 9", "forward 1", "down 9", "forward 9", "down 3", "down 3", "down 2", "forward 9", "forward 2", "up 3", "forward 3", "down 7", "down 3", "forward 2", "forward 1", "forward 6", "up 9", "forward 4", "down 9", "down 8", "up 3", "up 5", "forward 8", "down 9", "forward 5", "forward 4", "down 5", "up 4", "forward 7", "forward 3", "down 9", "forward 7", "down 2", "down 7", "forward 3", "up 3", "forward 7", "down 9", "down 4", "down 8", "forward 8", "down 6", "forward 9", "forward 4", "up 9", "down 9", "down 6", "up 7", "up 2", "forward 2", "forward 7", "down 7", "forward 9", "down 6", "down 2", "forward 4", "forward 8", "down 4", "forward 4", "forward 4", "forward 6", "up 6", "down 9", "down 3", "down 7", "up 2", "up 2", "forward 4", "down 4", "forward 6", "down 2", "down 2", "forward 1", "down 1", "forward 7", "up 5", "forward 9", "forward 8", "down 4", "forward 8", "down 5", "up 4", "down 8", "forward 4", "forward 7", "down 9", "down 3", "forward 6", "down 6", "forward 6", "down 9", "down 6", "forward 5", "forward 5", "up 9", "down 9", "down 9", "down 1", "down 5", "forward 5", "down 7", "forward 3", "down 6", "forward 5", "forward 8", "down 6", "forward 7", "down 5", "forward 4", "down 4", "down 9", "forward 3", "down 9", "down 9", "down 1", "up 7", "forward 4", "up 1", "up 1", "forward 1", "down 9", "up 8", "down 8", "down 3", "down 7", "forward 4", "down 5", "down 5", "forward 7", "forward 7", "forward 6", "up 2", "down 4", "forward 8", "forward 3", "forward 3", "forward 2", "forward 4", "up 9", "up 1", "forward 2", "forward 2", "forward 6", "down 9", "up 8", "forward 4", "forward 5", "forward 4", "down 4", "down 8", "forward 6", "down 8", "forward 9", "forward 8", "down 1", "down 2", "forward 2", "up 4", "up 7", "forward 5", "down 7", "down 5", "down 3", "up 7", "down 4", "forward 8", "up 8", "down 1", "down 2", "up 6", "up 8", "forward 9", "down 5", "down 2", "forward 5", "forward 4", "up 6", "forward 7", "down 3", "up 5", "up 9", "forward 5", "forward 1", "down 6", "down 7", "forward 9", "down 8", "down 2", "forward 9", "forward 2", "down 3", "forward 9", "down 3", "down 9", "up 3", "forward 7", "up 2", "up 5", "forward 3", "down 9", "up 1", "down 2", "down 4", "down 6", "forward 5", "forward 5", "up 7", "up 3", "down 1", "down 1", "up 8", "down 4", "forward 1", "down 4", "down 5", "down 9", "forward 7", "up 2", "up 1", "down 7", "forward 9", "forward 9", "forward 8", "forward 9", "down 5", "forward 9", "forward 9", "up 9", "down 7", "down 8", "forward 2", "forward 9", "down 1", "forward 3", "forward 8", "up 4", "down 4", "forward 4", "forward 3", "down 7", "down 3", "forward 6", "forward 9", "forward 1", "down 2", "up 3", "down 9", "forward 5", "forward 6", "forward 8", "up 2", "up 1", "down 3", "up 4", "forward 1", "up 9", "forward 4", "down 1", "up 2", "down 8", "down 9", "forward 3", "down 2", "up 5", "forward 2", "down 6", "down 5", "down 8", "down 3", "down 7", "down 2", "forward 8", "down 9", "up 7", "down 7", "down 7", "down 7", "forward 4", "forward 1", "forward 9", "up 9", "forward 5", "forward 8", "forward 7", "forward 7", "down 1", "forward 3", "down 7", "forward 2", "forward 4", "up 7", "forward 1", "down 5", "forward 5", "forward 1", "down 8", "forward 7", "forward 2", "up 3", "down 1", "up 7", "down 1", "down 2", "forward 9", "forward 6", "forward 3", "forward 2", "down 4", "forward 7", "forward 7", "forward 5", "forward 7", "forward 2", "down 9", "down 8", "forward 8", "forward 9", "down 3", "up 7", "up 1", "down 4", "forward 2", "forward 7", "forward 3", "forward 9", "up 2", "down 3", "forward 4", "down 8", "down 6", "down 4", "down 6", "down 7", "forward 9", "down 9", "forward 8", "down 1", "down 1", "forward 1", "forward 1", "down 7", "down 3", "down 3", "forward 2", "down 7", "forward 8", "up 7", "down 5", "forward 7", "forward 9", "down 2", "forward 9", "forward 3", "forward 9", "forward 9", "down 3", "forward 1", "forward 7", "up 8", "forward 7", "forward 4", "forward 5", "forward 6", "down 4", "up 3", "down 5", "up 8", "up 5", "up 6", "forward 1", "down 1", "up 8", "down 8", "down 5", "forward 8", "up 9", "down 8", "forward 2", "up 6", "forward 3", "down 3", "down 8", "down 4", "forward 6", "forward 2", "down 9", "up 9", "down 2", "down 9", "up 1", "down 6", "up 2", "down 9", "forward 8", "forward 3", "forward 6", "down 6", "up 9", "up 8", "forward 4", "down 2", "forward 5", "up 4", "up 4", "down 5", "down 9", "forward 3", "down 1", "forward 1", "forward 6", "forward 2", "down 7", "forward 7", "up 5", "forward 2", "down 8", "forward 5", "down 1", "down 7", "forward 7", "down 4", "forward 7", "forward 2", "down 6", "forward 9", "forward 4", "up 3", "forward 8", "forward 2", "up 6", "up 3", "forward 9", "forward 4", "down 2", "forward 6", "down 1", "forward 5", "down 2", "up 1", "down 1", "forward 2", "forward 4", "down 7", "up 6", "forward 4", "forward 7", "up 8", "forward 3", "down 8", "forward 7", "down 2", "down 5", "forward 3", "forward 7", "down 5", "forward 2", "forward 8", "up 6", "forward 8", "down 7", "up 3", "down 2", "forward 2", "down 8", "down 2", "up 5", "up 1", "forward 6", "down 1", "forward 2", "down 1", "forward 6", "forward 9", "down 9", "down 8", "down 3", "forward 5", "forward 3", "down 3", "down 1", "forward 4", "forward 8", "forward 2", "down 7", "forward 9", "forward 4", "down 4", "forward 6", "down 4", "forward 8", "down 8", "down 2", "up 7", "down 9", "down 5", "up 4", "down 3", "up 5", "forward 8", "down 4", "down 6", "forward 1", "up 2", "down 6", "forward 4", "down 8", "forward 1", "up 7", "forward 6", "up 2", "forward 1", "down 8", "down 2", "forward 3", "down 3", "down 2", "up 9", "down 3", "down 4", "down 3", "forward 9", "down 6", "forward 8", "forward 8", "down 1", "forward 8", "down 5", "up 9", "up 5", "up 5", "forward 5", "forward 4", "down 7", "down 6", "forward 9", "up 4", "forward 7", "up 5", "forward 7", "down 5", "down 3", "forward 5", "down 8", "up 3", "forward 4", "up 2", "down 1", "down 6", "down 6", "up 3", "forward 5", "forward 8", "down 2", "forward 6", "down 5", "down 4", "forward 9", "down 6", "forward 6", "up 5", "forward 4", "forward 5", "forward 1", "up 6", "up 2", "down 8", "up 4", "up 2", "down 3", "forward 4", "down 5", "forward 8", "up 5", "forward 6", "forward 9", "down 6", "down 3", "up 3", "down 2", "up 9", "forward 5", "up 5", "forward 3", "forward 2", "down 5", "up 2", "down 5", "forward 8", "forward 2", "down 1", "up 2", "down 6", "up 8", "down 3", "down 2", "forward 2", "down 1", "forward 8", "forward 2", "up 6", "forward 6", "up 3", "up 8", "up 2", "up 4", "down 7", "forward 6", "down 3", "down 2", "forward 5", "down 7", "down 6", "forward 1", "down 4", "forward 4", "up 1", "down 3", "up 3", "down 4", "forward 1", "down 2", "forward 6", "down 7", "forward 3", "forward 1", "forward 5", "down 7", "down 9", "forward 7", "forward 2", "forward 7", "forward 8", "down 1", "down 1", "up 6", "forward 2", "up 7", "down 9", "up 4", "up 9", "forward 9", "forward 6", "down 3", "down 9", "forward 1", "forward 1", "up 8", "forward 6", "forward 1", "forward 9", "down 2", "down 1", "forward 2", "forward 9", "down 9", "down 6", "forward 5", "down 6", "forward 4", "down 3", "forward 1", "down 4", "up 5", "forward 6", "forward 3", "down 2", "up 3", "down 9", "down 2", "forward 1", "down 4", "up 2", "down 6", "forward 6", "forward 7", "forward 3", "forward 9", "up 7", "up 2", "forward 2", "up 2", "forward 1", "up 2", "forward 8", "forward 5", "down 6", "up 7", "down 4", "down 1", "up 8", "forward 1", "down 3", "up 8", "forward 8", "down 6", "down 1", "down 6", "forward 1", "forward 7", "up 3", "forward 6", "forward 1", "up 3", "down 5", "down 1", "forward 5", "down 5", "up 7", "up 3", "down 6", "forward 6", "up 7", "forward 5", "forward 2", "forward 1", "down 8", "forward 3", "down 3", "forward 5", "down 4", "up 4", "down 8", "down 7", "down 7", "up 9", "up 2", "down 4", "down 1", "down 4", "forward 9", "up 8", "up 4", "down 2", "forward 8", "forward 1", "down 2", "up 5", "down 3", "down 8", "down 8", "down 6", "down 5", "forward 7", "down 3", "forward 5", "down 6", "down 9", "down 2", "forward 8", "down 4", "up 2", "forward 4", "down 8", "down 5", "down 4", "forward 2", "up 3", "forward 4", "up 3", "down 8", "down 2", "up 8", "forward 4", "forward 6", "down 3", "forward 9", "forward 6", "forward 8", "forward 5", "forward 1", "forward 5", "down 3", "up 2", "forward 4", "down 4", "down 3", "forward 1", "forward 3", "forward 7", "forward 9", "down 2", "up 4", "down 3", "up 8", "forward 9", "down 5", "up 9", "down 1", "up 4", "forward 7", "forward 2", "forward 4", "up 8", "down 4", "down 1", "forward 8", "down 4", "down 7", "up 1", "down 3", "down 2", "forward 5", "up 6", "down 7", "forward 2"],
    day3: ["111110110111", "110011001101", "110100000011", "100011000101", "110010010000", "100110100101", "111000010101", "011110011001", "111001110111", "101001101001", "110001011001", "110110110100", "101010101100", "011010010010", "101101110000", "011101000111", "100100100100", "100101001111", "010101101011", "101101000001", "111111000100", "010110001000", "001111010010", "100010000100", "000110011001", "001111001000", "011101101111", "011001100101", "001001011111", "100011110001", "110010111000", "000101000010", "000011010100", "010011111000", "010101101100", "111110110101", "100011100100", "000100010010", "000111110111", "010110000111", "110110010101", "000011001011", "001100000101", "100010101100", "101000111001", "000010100100", "000011000001", "010100011101", "101110111001", "110001101101", "100000101111", "010000100101", "110001110110", "111101011101", "100100000101", "110011101110", "100001011001", "101011111000", "011101110000", "100100011101", "101010110011", "010010101100", "100010010101", "010000001001", "011100001000", "111011000000", "000101111001", "111001101001", "111111101111", "010000110001", "000011011101", "001010011001", "010010100110", "100011100011", "101010000010", "100111001011", "010000010011", "110111110110", "010111011110", "101101000010", "011011011010", "101000100000", "011001110011", "011001010010", "100101110010", "011011001010", "001010101101", "011101010011", "111101101011", "100011101010", "101101010110", "000010100011", "010100101000", "001000100101", "101111011010", "011110011011", "101000010001", "110001011100", "001010001010", "011010001100", "100000100100", "010110110111", "111010000001", "111111010010", "010111001010", "111000010110", "111110010011", "110001100000", "000111010101", "010001000101", "001100100011", "110010000011", "101100001011", "100100011110", "101110010001", "101001100010", "011001111001", "011000000101", "111100101011", "000101011011", "111110001000", "010111110101", "101010101110", "001110110111", "110000110110", "110001000011", "000010000110", "100100100011", "010101110111", "110000101001", "101100001110", "101101001001", "100011001101", "111010101100", "011100111001", "011001111010", "000010111101", "110010000010", "001111111100", "001011001000", "001110110001", "101100011100", "101011000110", "101010010110", "011000101011", "111101000110", "110011010011", "110000011001", "011000101110", "000001111001", "111011011001", "010111111010", "010011000110", "000101111100", "111101101001", "101001111001", "010000011001", "111111100111", "010101101000", "000100110010", "000101100010", "011001000010", "100010000000", "111100001100", "101110110011", "001100101001", "111001000001", "110101111111", "000100110001", "101000001011", "100110001000", "101001000111", "011010100001", "011001101111", "000111111011", "001111000100", "001001000101", "110010001011", "010110010110", "111000101110", "100100001001", "100101011010", "111111110101", "111100010010", "101110111101", "010100011011", "001101111001", "010010100111", "101111010000", "000011111101", "101110011101", "111000011111", "001000000100", "100011001010", "101111101000", "001110010001", "100110111011", "101011110000", "110111001111", "001000010010", "101011111111", "100111111111", "001011010100", "110100111111", "111001010110", "101001110001", "101010111110", "010100011010", "100000000001", "000010010101", "010010101010", "011101001011", "110101010110", "001110000000", "010111111101", "011101110101", "001010110010", "001111101111", "100011110110", "101100110100", "111010111010", "001110000011", "111101111110", "001111100110", "000010010110", "111110011011", "111110011000", "001001111101", "000011110110", "001000101010", "000110101111", "010010111100", "100010101000", "000111010000", "110000001001", "000101111011", "100100101000", "101001110000", "110001001010", "110011000001", "111010100110", "000000100011", "111000111010", "100100111000", "100010010100", "111011110100", "001001001011", "000010110001", "000000101110", "010010101011", "000100101000", "011000000100", "110111110111", "111100001011", "001000000011", "101010011010", "110110011010", "000011000101", "110110110001", "000111010011", "011010111101", "000101011110", "110111111111", "111010101110", "001101000011", "101100000101", "010001111001", "101001010100", "010111100010", "011100101100", "001100110111", "000101010000", "000001110100", "100101001010", "000010110000", "011101110110", "000000110000", "001001000110", "100000111000", "011101111101", "111011001010", "100010001100", "001100000001", "101100111011", "100010011110", "011011111010", "001000000110", "010001001111", "010101010110", "000100000000", "000110111000", "001010011111", "010000001111", "111001000111", "010001100101", "100011011000", "111111000001", "111010111110", "000011010101", "001000101100", "001000110101", "111101101100", "000011100100", "010110111111", "101010001000", "010001111011", "101110000111", "000111010111", "011011111100", "010100000011", "100010111001", "110100110001", "100001100111", "110000101011", "001000101011", "101100101000", "001001010100", "011000111111", "111000001010", "111100101000", "010100110100", "000011010001", "110001100110", "110101111101", "101010100000", "101110111110", "110101011001", "111101111001", "100111101110", "010011101000", "100000001010", "000100100101", "010000000000", "100000010110", "110100011000", "101100101010", "011000001111", "001111110111", "011010011010", "001100010001", "110000101111", "011101111010", "110010010110", "001110101010", "000100111010", "011100000001", "011011110010", "001000001101", "111110111011", "110100110100", "010111011000", "110111101111", "010110000010", "111011011010", "000001001100", "010010111101", "001110111010", "010100000010", "111000110110", "110001111101", "100110000001", "100001011111", "010110110100", "011000111000", "110101001101", "100010000010", "010010000110", "111111011111", "101111000011", "101010010101", "000000010001", "000010001010", "101111000010", "010001000001", "100110011011", "010111100000", "101111000101", "101111001110", "011010110010", "000101101110", "111000011010", "011101101001", "001010101110", "111101101110", "000001110111", "001111001001", "110010101111", "010111001110", "101001001010", "011110001000", "110111011010", "010001010010", "001101001000", "001110100001", "010011110110", "110010110101", "110000011101", "111011101111", "000000001100", "101010111111", "011110010011", "001101011111", "100000100101", "011010100111", "011010110000", "000100010001", "011111001101", "111110010111", "110001001101", "101111011000", "111010100000", "111001111001", "110000010111", "010010110110", "110110010000", "100101101010", "101010000000", "100010010001", "010110000110", "000000011000", "001011111110", "010000010111", "001001011110", "010100000100", "011011010110", "110010100000", "110001010101", "000110010111", "101001100000", "101111001000", "010100110110", "100101011110", "111010010001", "110101101011", "111111011101", "010000101111", "011100000000", "010011111110", "110000111111", "001110001101", "101001001011", "111011010001", "011101101100", "110010001111", "100100100110", "100011000011", "000010111000", "111101001000", "100001101111", "001011011001", "111101011011", "111110010100", "100000011110", "100110001011", "111100011001", "111111110000", "100100111001", "010001111110", "100110110010", "000000001101", "011110110100", "111011000101", "101001000101", "110010101001", "110011110111", "000010010011", "010011010010", "110101100000", "111000000010", "010100100000", "110000111010", "011101110111", "010011010100", "000110101001", "000110011100", "101000000101", "101101110111", "010101100110", "000001111000", "110100111100", "001101010010", "110111111011", "010010001101", "001111000011", "101111011110", "010110101011", "110011100011", "101000000000", "011000001000", "101101100111", "000100111011", "101101000111", "110001000111", "001010100011", "001011101101", "000110011010", "101011100000", "111110100001", "111110000010", "001111100101", "011011011101", "000111100001", "101001100101", "110000100100", "111000111011", "101011001110", "100111100011", "000100100000", "000111001110", "001000011001", "001101100101", "111000001110", "011011110101", "010001011100", "000000110100", "011010001111", "000011100111", "001100111101", "110010110011", "000100010111", "100000010001", "000001100000", "111101000100", "110100101010", "011010110011", "010101000010", "101100111100", "100001101001", "001011101111", "110100010001", "011001001001", "110010100010", "001000110001", "100111011110", "100111110011", "100101111010", "100000110011", "111000111110", "111111011010", "011010111011", "001101001011", "001110101100", "010110111101", "001101110111", "000010101101", "110110101001", "101001000010", "001101100111", "100111011000", "001101101110", "110001111001", "101111100000", "000110001110", "111001111100", "110101011110", "000001010010", "100001011101", "001110000101", "011000110110", "000000111100", "010100100110", "000110001001", "010011111101", "101010000111", "001001111011", "101101010111", "111101100011", "111001111110", "000010111100", "110000101000", "011100100010", "101100111010", "010001010101", "001010011100", "011001011000", "001111001011", "100100110111", "001001111100", "110010001110", "101010000110", "011000111011", "010001011110", "100011000010", "110100101111", "101111110110", "111000110000", "100100110011", "110110001111", "100000111100", "011001000000", "110000000110", "100011101011", "000000110011", "111101101000", "111010000110", "101111011001", "011011010011", "111001010011", "100111010001", "011000010110", "111110110011", "100010101111", "101111100100", "010000111000", "000011111011", "011111001001", "000001110001", "000001001111", "110000110111", "100110100000", "101100011110", "000110111101", "011000001010", "010011100011", "111111011000", "000000000001", "011110000101", "011001001000", "001010111010", "111011000111", "010111010110", "011011110111", "000011111001", "001101110001", "100110010000", "010100011111", "101100111110", "110100011001", "101011100001", "110101011111", "111111001110", "010011110101", "010101000011", "010011110000", "101110110001", "000100001111", "110011011000", "111100110000", "111110110110", "110111010100", "110011110001", "100100101011", "000101001010", "111110001001", "001100110010", "101011100101", "101110101101", "001000101110", "100110001001", "011001111000", "111111000010", "011001110111", "110100001000", "101101101000", "110010011011", "111111010001", "101001110010", "101010001110", "100101000000", "100001011100", "011011000101", "001001001001", "010110000011", "010111110111", "000000111011", "110110011100", "110000110011", "011110101000", "110110110110", "001101000100", "101110101011", "101101001110", "000110100110", "001100101110", "011010011001", "011111001111", "010010000001", "111110101001", "111000000101", "001010000110", "000100111110", "000001101101", "111010100001", "010110111010", "110000010001", "010001101011", "110000010010", "000001011011", "111001011000", "011000001101", "101101110001", "100000101110", "000010110100", "100001111001", "100010110110", "101011111001", "111101011010", "110100000100", "101111000100", "101101110011", "000011110011", "110000010101", "011000110011", "001100010110", "100101011101", "000100101011", "101011111101", "111000111100", "001000011011", "101000001010", "010001001000", "110111110001", "101010010111", "101100100010", "010001000100", "000110100010", "011111010000", "000110100001", "010010001001", "001001010001", "111010111100", "101110001101", "101011111011", "011101010101", "110010100001", "110101110110", "111000111000", "110111010010", "110101010111", "010101101010", "110101010010", "000000101011", "111101000001", "100011001110", "111110000011", "100111000100", "010010011101", "010100000111", "001111111110", "011001100001", "101000101000", "001111111010", "110001101011", "110110010111", "010110111100", "110100010111", "110101110001", "010011100111", "100101011011", "110111111100", "010011111100", "010000100111", "010111101110", "101010010100", "111001011101", "101111110101", "001101110011", "110111101110", "110100001010", "000111101001", "011111001010", "110110000000", "100110010111", "000101001111", "011001010011", "000000110001", "110110101000", "101001010000", "000010010010", "000011001111", "011010100110", "010101011011", "100100111011", "011110010110", "100001010001", "111010111101", "110100011011", "011101010001", "110011111011", "101100110101", "100001001101", "011111111111", "111111100100", "111100111101", "111011010110", "100101101100", "001011111101", "100101110111", "001100100010", "001011100010", "101010100111", "010111110011", "011111011011", "100011110100", "011011001111", "000101101111", "010011010111", "011001111101", "101101101101", "000010100101", "110101100110", "100101001000", "111110101000", "100101101011", "010101101101", "010001101000", "010111100110", "010111010100", "101110010000", "010010011100", "011001110000", "111010110001", "100000000000", "101111101100", "000100011100", "011010100011", "101111010010", "010000111010", "100100100000", "000111101100", "001000010110", "010011011000", "001101000010", "001000001110", "011011011000", "111110000000", "010100101010", "111111101100", "001101001110", "011001001101", "100100110100", "000010011001", "010000111110", "101111110100", "001100101100", "011111010111", "100010010010", "011001010001", "111011001000", "011011010100", "000101011101", "010001110000", "001000011000", "100111010111", "000001010101", "010100111010", "001000000010", "001100011011", "101110001011", "010000001110", "001011011101", "000100100001", "001010010001", "110100101001", "000011110101", "010110111011", "011010101100", "101110011110", "100001001010", "111100101111", "011010001101", "001111111000", "000011000111", "001100010011", "101001111101", "111000011000", "110111110011", "110110100011", "011110001010", "001111011110", "000101000001", "101101011110", "110000111101", "101011100011", "111011111100", "010011111010", "010101011000", "111110111101", "111011000110", "111011010000", "110001111110", "011110101101", "010010010000", "011011100011", "001100111110", "100101010100", "010010100001", "111100011010", "000010110011", "100000011100", "011111111010", "111111111010", "000110000011", "011001111100", "100100010001", "110111001011", "100101010010", "010110100110", "111011100000", "100100100010", "110111000010", "100001011010", "000110010010", "010000011111", "010001110100", "011001010111", "110111100100", "001011100100", "110001111011", "011011001000", "101110010101", "101001010101", "111100000000", "100110010010", "110010111100", "101110111100", "111001100110", "100111101100", "111011111010", "111000100011", "001001100011", "011110111000", "000111101010", "011011110001", "011111101100", "110111001010", "101111111010", "001010010011", "100101111110", "011011100010", "100111101101", "000010110111", "101010000011", "001100111001", "001101011001", "110010011000", "101100101100", "111000000111", "111110011111", "101010110010", "010011001110", "111101001001", "001011001001", "100111011111", "110100001111", "001111001100", "110101100001", "011001100000", "001100101000", "111111111111", "100110000000", "000100000011", "110001001111", "101000111110", "101111100101", "101000110100", "110100111000", "100010011000", "110011100010", "101010110100", "110000100010", "010100000000", "111011111011", "001110000111", "000110110010", "010010001000", "110110011110", "001111111101", "100100001111", "100110110100", "011110000111", "111101010011", "011000100000", "001011010010", "011001111111", "110010011101", "000001000110", "101011010001", "101101011111", "011101001111", "011010000011", "011010001010", "000010011101", "010010110011", "111100111010", "111011010101", "111110101010", "010000100011", "011000100101", "010010110000", "010100110001", "111110110000", "100010001000", "000011100011", "100000111101", "111001010101", "100000100001", "001011111000", "111100000001", "110001111010"],
}

module.exports = data;