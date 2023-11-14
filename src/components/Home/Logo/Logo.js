import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/6.TechnoTiger_image.svg'
import './logo.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
   width="500"
   height="500"
   viewBox="0 0 132.29167 132.29167"
   version="1.1"
   id="svg1107"
   xmlns="http://www.w3.org/2000/svg">

        <g
          className="svg-container"
          transform="translate(0 123) scale(1 -1)"
          fill="#1401c0"
        >
    <path
       
       d="m 49.891008,129.70596 c -2.568159,-5.45895 -3.843525,-11.67973 -5.074109,-24.7496 l -0.715569,-7.599995 -2.187427,-2.49238 c -2.06228,-2.349778 -2.180263,-2.645011 -2.062187,-5.160165 0.07422,-1.581151 -0.209427,-3.503716 -0.696399,-4.720081 -0.758822,-1.895394 -0.758738,-2.143869 9.6e-4,-3.25008 0.461097,-0.671304 0.82272,-2.179601 0.82272,-3.431496 0,-2.523841 0.881365,-4.583501 2.993086,-6.994516 l 1.44619,-1.651167 0.553038,1.956612 c 1.292779,4.57375 4.312821,7.406479 12.655309,11.870384 2.383169,1.275176 4.060532,2.319001 3.727478,2.319612 -1.364128,0.0027 -9.190092,-2.604041 -11.860925,-3.950408 -2.72035,-1.371323 -2.852423,-1.522838 -2.603417,-2.986597 0.323621,-1.902359 -0.764613,-2.947564 -2.609124,-2.505948 -1.053932,0.252332 -1.269817,0.591112 -1.269817,1.992681 0,3.685633 6.554392,8.020252 14.373671,9.505751 l 3.509675,0.666764 -2.962318,0.567513 c -3.914998,0.750018 -5.623028,0.71607 -8.765693,-0.174198 -2.22097,-0.629171 -2.618222,-0.919139 -2.618222,-1.911122 0,-2.403564 -3.741002,-2.757776 -4.358022,-0.412635 -0.505881,1.922699 0.595271,3.504899 3.22374,4.63207 1.991636,0.854073 3.402651,1.032913 8.334394,1.056318 3.265273,0.01553 5.937065,0.09653 5.937309,0.180056 8.73e-4,0.284759 -7.510382,3.463289 -8.184108,3.463289 -0.369192,0 -0.895708,-0.488042 -1.170046,-1.084541 -1.016518,-2.210213 -4.055317,-1.241185 -3.695729,1.178523 0.44822,3.016128 8.646297,3.703743 14.15966,1.187639 1.47423,-0.672793 3.30574,-1.611991 4.070009,-2.08711 1.335862,-0.830465 1.443301,-0.830465 2.779154,0 0.764278,0.475119 2.595779,1.414317 4.070018,2.08711 5.513354,2.516104 13.711435,1.828489 14.159651,-1.187639 0.359593,-2.419708 -2.679211,-3.388736 -3.69572,-1.178523 -0.628659,1.366895 -1.10043,1.35699 -4.54309,-0.09538 -5.390258,-2.273982 -5.313319,-2.432524 1.193985,-2.46026 4.875366,-0.02077 6.275058,-0.199644 8.266648,-1.056335 2.628149,-1.130482 3.729294,-2.71377 3.22374,-4.635221 -0.605741,-2.302568 -4.357943,-1.997821 -4.357943,0.353939 0,2.189334 -5.242272,3.246202 -10.947448,2.207067 l -3.453665,-0.629051 3.494246,-0.622589 c 3.513481,-0.626018 9.770779,-3.220607 11.680361,-4.843263 1.801349,-1.530677 2.763619,-3.211135 2.763619,-4.826197 0,-1.275513 -0.2386,-1.62777 -1.269814,-1.87466 -1.844522,-0.441616 -2.932751,0.603589 -2.609123,2.505948 0.249003,1.463759 0.116926,1.615274 -2.603424,2.986597 -2.623348,1.32243 -8.734502,3.353491 -12.466475,4.143265 -0.833746,0.176435 0.758466,-0.773802 3.538248,-2.111639 8.471973,-4.077332 13.038241,-8.107152 13.707,-12.096691 0.174264,-1.039568 0.495501,-1.89012 0.713853,-1.89012 0.737251,0 3.535569,4.062607 4.047485,5.876155 0.279469,0.990031 0.367831,2.333275 0.19636,2.984987 -0.21213,0.806287 0.02915,1.624796 0.755185,2.561529 l 1.066935,1.376623 -1.033065,2.864311 c -0.802896,2.226143 -0.920398,3.172601 -0.527381,4.248071 0.573286,1.568768 0.09228,2.626594 -2.704833,5.948508 -1.586339,1.88396 -1.704853,2.289949 -2.040306,6.989305 -0.85882,12.03138 -2.647548,21.16856 -5.209737,26.61236 l -1.393094,2.95987 -0.289557,-12.77355 c -0.247074,-10.89961 -0.432403,-13.1625 -1.263252,-15.42468 -0.81795,-2.22704 -1.297008,-2.80533 -2.994906,-3.61515 -1.783423,-0.850635 -3.031821,-0.964054 -10.611349,-0.964054 -9.669989,0 -11.948205,0.456578 -13.126813,2.630744 -1.428386,2.63493 -1.961073,7.87007 -1.951708,19.18071 0.0052,6.16384 -0.03674,11.20698 -0.09294,11.20698 -0.0562,0 -0.706487,-1.28441 -1.445021,-2.85425 z M 36.741988,96.752978 C 30.192406,90.356954 26.88024,83.917242 26.854316,77.52875 c -0.01678,-4.138134 0.258678,-4.813419 1.811869,-4.441553 3.06943,0.734885 5.423175,-3.361012 4.145029,-7.213018 -0.902341,-2.719415 -3.064429,-3.777895 -7.328153,-3.587577 l -3.126764,0.139569 -0.297089,-1.516546 c -0.163396,-0.8341 -0.02774,-2.080446 0.301454,-2.769661 0.499076,-1.044886 0.454241,-1.405213 -0.269827,-2.168433 -2.468317,-2.601801 -9.490808,-0.89123 -16.7568029,4.081694 l -3.6536975,2.500629 1.06267,-1.750913 C 3.3274743,59.839944 5.2936577,57.622282 7.1123065,55.87481 10.993781,52.14525 14.481032,50.629146 20.029788,50.258829 24.411387,49.9664 28.679037,50.92738 33.9155,53.385561 l 3.789766,1.779054 -4.15277,0.256633 c -5.132093,0.317153 -6.429836,1.149626 -5.104581,3.274459 0.45293,0.726195 1.90679,1.97109 3.230803,2.766423 2.677353,1.608283 4.059025,1.708862 14.364033,1.045559 l 5.305678,-0.341505 -2.779162,0.737468 c -6.829998,1.812398 -12.555194,5.533472 -14.792823,9.614564 -2.513575,4.584369 -0.680261,13.162701 4.976963,23.287905 1.518279,2.717399 2.607018,4.940709 2.419419,4.940709 -0.187599,0 -2.181473,-1.797228 -4.430838,-3.993852 z m 54.846484,3.741252 c 0.125871,-0.25874 1.622765,-3.181798 3.326423,-6.495688 4.075219,-7.926945 4.786681,-10.034585 5.074589,-15.033146 0.207736,-3.60646 0.08909,-4.487444 -0.85484,-6.347494 -2.110673,-4.159204 -7.635643,-7.807529 -14.688924,-9.699614 l -2.779162,-0.745521 4.547723,0.253952 c 2.501246,0.139683 5.944779,0.383787 7.652311,0.54246 3.847066,0.357496 6.230548,-0.339894 8.836058,-2.585351 1.98872,-1.713925 2.55757,-3.564285 1.32353,-4.305303 -0.3474,-0.2086 -2.56373,-0.492533 -4.925179,-0.630968 L 94.807446,55.195861 98.0904,53.674696 c 4.92072,-2.28002 7.92542,-3.120253 12.19031,-3.408886 8.15654,-0.552008 14.90432,3.071823 19.95064,10.714299 l 0.95482,1.446062 -1.26325,-0.85502 c -6.95099,-4.704708 -11.28939,-6.641773 -15.0589,-6.723671 -1.3098,-0.02849 -2.8914,0.208592 -3.51466,0.526788 -1.18641,0.605697 -1.52698,2.386299 -0.62161,3.249965 0.28139,0.268429 0.37224,1.152828 0.20189,1.965355 -0.3094,1.475707 -0.31412,1.477556 -4.33458,1.699572 -3.52889,0.194875 -4.192,0.381707 -5.38124,1.516156 -1.13698,1.084584 -1.356386,1.715234 -1.356386,3.898694 0,3.493545 1.387516,5.348906 3.944876,5.275033 2.07186,-0.05982 2.35358,0.481764 2.36451,4.545796 0.0131,4.870151 -3.13166,11.866149 -7.664884,17.051795 -1.921094,2.197565 -7.374623,6.865536 -6.913464,5.917596 z M 22.401171,85.885225 C 18.916408,78.450776 18.061042,74.334897 17.500819,62.305673 l -0.297435,-6.386785 h 1.192358 c 1.109656,0 1.229586,0.26896 1.729013,3.877465 0.786709,5.68419 2.175105,6.763111 6.18922,4.809613 1.913322,-0.931131 1.98601,-0.932441 3.120428,-0.05619 l 1.161471,0.897177 -1.60835,1.290972 c -0.884589,0.710045 -2.354688,2.73653 -3.266881,4.503302 -1.655123,3.20571 -1.658535,3.227487 -1.658535,10.573951 0,4.04889 -0.02643,7.361956 -0.05867,7.362373 -0.03229,2.31e-4 -0.753289,-1.481148 -1.602263,-3.292352 z m 86.694709,-2.250137 c 0.17934,-4.405404 0.0356,-6.527291 -0.60299,-8.901352 -0.93576,-3.478776 -3.23267,-7.240964 -5.15398,-8.441852 l -1.26581,-0.791173 1.29559,-0.972147 1.29558,-0.972156 1.69864,1.001446 c 3.92769,2.315603 5.88156,0.741468 6.27135,-5.052496 0.22782,-3.38633 0.30807,-3.58647 1.43809,-3.58647 1.18973,0 1.19681,0.03283 1.19681,5.56224 0,10.780623 -1.27486,17.178221 -4.96381,24.909816 l -1.44493,3.028401 z m -44.100213,0.727336 c -0.500771,-0.527851 -1.880539,-1.502024 -3.066154,-2.164823 -2.351848,-1.314777 -3.876651,-3.326775 -4.690281,-6.1889 l -0.52368,-1.84215 1.999751,2.167178 c 3.635591,3.939939 8.691442,4.7236 12.985643,2.01276 1.159922,-0.732239 2.565409,-2.010946 3.12329,-2.841578 0.822209,-1.224197 1.013831,-1.327644 1.011736,-0.546195 -0.0044,1.628876 -1.790483,4.825552 -3.324564,5.95008 -2.553854,1.872041 -6.259445,4.413368 -6.435279,4.413368 -0.09348,0 -0.579682,-0.431881 -1.080462,-0.95974 z M 11.279143,78.379778 C 10.658947,76.549806 9.9036952,73.528857 9.6007888,71.666559 L 9.0500617,68.280566 11.42305,63.810306 c 2.152554,-4.054987 2.461263,-4.417668 3.323234,-3.904162 1.326378,0.790174 1.795312,4.16069 0.827976,5.951195 -1.482253,2.743601 -2.492313,6.770465 -2.826958,11.270466 l -0.340536,4.5792 z M 120.20754,77.052994 c -0.17852,-2.729645 -0.77588,-5.460211 -1.8433,-8.425764 -1.82066,-5.058301 -1.99475,-7.379949 -0.64102,-8.548617 1.15567,-0.997677 1.32371,-0.825287 3.80375,3.902101 2.16153,4.12025 2.3175,6.343309 0.83335,11.878861 -1.5055,5.615273 -1.85106,5.806839 -2.15278,1.193419 z M 62.149402,61.608653 c -1.221606,-4.578067 -0.649159,-18.13044 0.711016,-16.832936 0.420194,0.400829 0.409765,1.420726 -0.04015,3.923268 -0.733724,4.081658 -0.772682,8.394898 -0.110651,12.251444 0.624068,3.635379 0.327224,3.984132 -0.560255,0.658224 z m 8.209024,-0.363389 c 0.173966,-1.18811 0.288745,-3.247841 0.359828,-4.740449 0.085,-1.78432 0.102439,-4.249173 -0.25574,-6.867824 -0.392145,-2.866939 -0.603743,-4.097082 -0.218431,-4.464639 0.2979,-0.284181 0.715965,-0.350408 0.929029,-0.14717 0.663986,0.633314 0.17079,15.743725 -0.269154,17.159974 -0.89021,2.865735 -0.954206,1.851148 -0.545532,-0.939892 z m -35.415204,-0.48587 c -0.594313,-0.358567 -0.468071,-0.545885 0.638349,-0.947166 1.73232,-0.628279 7.190452,-1.485901 9.197923,-1.445248 1.167522,0.02363 0.819137,0.228608 -1.515902,0.891841 -1.667501,0.473632 -3.671926,1.108911 -4.454292,1.411728 -1.710998,0.662242 -2.871477,0.688913 -3.866078,0.08884 z m 58.486516,-0.288552 c -0.756074,-0.391423 -2.688854,-1.015393 -4.295073,-1.386596 -2.524268,-0.583387 -2.680493,-0.679887 -1.151824,-0.711452 2.219265,-0.04584 7.625965,0.777679 9.450572,1.439434 1.106416,0.401281 1.232663,0.588599 0.638346,0.947166 -1.078525,0.650711 -3.066442,0.527134 -4.642021,-0.288552 z m -51.39769,-6.493293 c -3.193521,-1.095539 -7.7182,-3.617301 -9.21212,-5.134235 l -1.038831,-1.054843 1.825158,-0.326621 c 1.282451,-0.22951 1.825151,-0.580998 1.825151,-1.182101 0,-1.465875 -3.979529,-6.622676 -6.468245,-8.381757 -1.305997,-0.923106 -4.164826,-3.405436 -6.352942,-5.516279 l -3.978398,-3.83791 1.325563,-0.828526 c 0.817233,-0.510797 1.32556,-1.269371 1.32556,-1.978135 0,-0.652003 0.299623,-1.149615 0.692205,-1.149615 0.440672,0 0.902872,1.02141 1.271907,2.810766 0.666376,3.231064 2.782008,6.694336 5.016652,8.212236 1.966297,1.335615 4.487775,2.177052 11.160905,3.724463 5.897726,1.367605 8.821686,2.737433 10.94259,5.126448 1.382273,1.557004 3.845766,6.299311 4.409888,8.489194 0.268115,1.040791 0.223091,1.070444 -0.57682,0.379894 -1.326287,-1.144971 -4.392974,-2.231847 -6.297331,-2.231847 -3.431037,0 -4.737792,-0.837906 -7.211663,-4.624189 -1.526435,-2.336231 -2.653567,-3.570162 -3.261143,-3.570162 -1.412942,0 -1.622329,0.773476 -0.681231,2.516443 2.080008,3.852298 6.174074,7.402187 10.135369,8.78819 l 1.937645,0.677957 -2.02121,0.01664 c -1.111668,0.0091 -3.257562,-0.407556 -4.768659,-0.925938 z m 9.321173,-4.812004 c 0.892636,-0.940909 0.88486,-1.004136 -0.267504,-2.174256 -0.899575,-0.913432 -1.465678,-1.137316 -1.63748,-0.597475 -0.531726,1.670847 -1.246514,7.101139 -1.748731,0.519293 0.04694,-1.608107 -0.81928,-2.60989 -2.099257,-2.468303 -1.901237,0.210299 -2.042707,2.197794 -0.297283,4.176538 1.639162,1.858281 4.554818,2.120578 6.050255,0.544283 z m 34.272189,5.085212 c 4.050302,-1.50451 8.071728,-5.007994 10.13537,-8.829984 0.941099,-1.742967 0.731709,-2.516443 -0.681231,-2.516443 -0.607573,0 -1.734708,1.233931 -3.261144,3.570162 -2.47387,3.786283 -3.780626,4.624189 -7.211661,4.624189 -1.904355,0 -4.971041,1.086876 -6.297338,2.231847 -0.799911,0.69055 -0.844934,0.660897 -0.576819,-0.379894 0.56413,-2.189883 3.027623,-6.93219 4.409896,-8.489194 2.120901,-2.389015 5.044863,-3.758843 10.942586,-5.126448 6.673128,-1.547411 9.194601,-2.388848 11.160901,-3.724463 2.23465,-1.5179 4.35029,-4.981172 5.01665,-8.212236 0.36904,-1.789356 0.83125,-2.810766 1.2719,-2.810766 0.39259,0 0.69222,0.497612 0.69222,1.149615 0,0.708764 0.50832,1.467338 1.32556,1.978135 l 1.32556,0.828526 -3.9784,3.83791 c -2.18812,2.110843 -5.04694,4.593173 -6.35294,5.516279 -2.48871,1.759081 -6.46824,6.915882 -6.46824,8.381757 0,0.606209 0.552122,0.955432 1.894877,1.198543 l 1.894883,0.34308 -2.021208,1.676388 c -3.046334,2.526637 -8.825805,5.006436 -12.256892,5.259061 l -2.902171,0.213688 z m 1.58131,-5.629495 c 1.745417,-1.978735 1.603951,-3.966247 -0.297288,-4.176538 -1.279973,-0.141578 -1.83295,0.190751 -1.942964,1.704403 -0.359724,4.949554 -0.751642,5.273715 -1.728521,0.185584 -0.106541,-0.554946 -0.914403,-0.256934 -1.813986,0.656508 -1.152356,1.170111 -1.160132,1.233338 -0.267495,2.174247 1.495428,1.576294 4.411083,1.314007 6.050254,-0.544282 z M 0.35399189,50.531665 c 1.85036391,-2.955988 7.26249641,-7.45299 7.64663321,-6.353689 0.099497,0.284747 0.5009458,0.928069 0.8921118,1.429612 0.6579574,0.843622 0.8173653,0.856559 2.1293091,0.172752 0.779961,-0.406528 1.487816,-1.198419 1.573007,-1.759754 0.230217,-1.516856 -2.54495,-4.229687 -6.0228056,-5.887518 L 3.5466334,36.690821 5.3906702,36.36081 c 2.4952542,-0.446545 7.3488218,0.01725 9.0432198,0.864117 l 1.382472,0.690975 -1.309127,0.818252 c -1.83203,1.145077 -1.636315,2.00499 0.747165,3.282857 1.942003,1.041179 2.038111,1.196932 1.729233,2.802464 -0.179877,0.934999 -0.50374,1.87459 -0.719696,2.087969 -0.215957,0.213379 -1.960499,0.592192 -3.876775,0.841817 -5.0344572,0.6558 -8.2657311,1.422046 -10.4848538,2.486321 -1.25919269,0.603899 -1.80652147,0.708559 -1.54831631,0.296083 z M 130.72651,50.300632 c -2.10398,-1.086805 -3.96159,-1.551332 -9.35691,-2.339877 -2.61995,-0.38291 -4.93297,-0.863842 -5.14002,-1.068744 -0.20707,-0.204884 -0.52366,-1.137537 -0.70353,-2.072536 -0.30888,-1.605532 -0.21277,-1.761285 1.72924,-2.802464 2.38347,-1.277867 2.57918,-2.13778 0.74716,-3.282857 l -1.30913,-0.818252 1.38247,-0.690975 c 1.6944,-0.846888 6.54797,-1.310662 9.04322,-0.864117 l 1.84404,0.330011 -3.02562,1.442247 c -3.47785,1.657831 -6.25302,4.370662 -6.02281,5.887518 0.0852,0.561335 0.79306,1.353226 1.57302,1.759754 1.31194,0.683807 1.47135,0.67087 2.1293,-0.172752 0.39117,-0.501543 0.79262,-1.144865 0.89212,-1.429612 0.38125,-1.091044 5.8012,3.400807 7.62363,6.318177 0.46749,0.74837 0.40408,0.739557 -1.40618,-0.195521 z M 27.59922,49.3878 c -1.945413,-0.622961 -4.035313,-1.14359 -4.644223,-1.156952 -1.576574,-0.0346 -1.814312,-0.716106 -0.611917,-1.754126 1.015099,-0.876329 1.101682,-0.862312 4.229626,0.684727 1.756318,0.868648 3.593719,2.001433 4.083106,2.517293 0.489397,0.515851 0.797718,0.916274 0.685166,0.889814 -0.112555,-0.02646 -1.796341,-0.557795 -3.741758,-1.180756 z m 74.29122,0.252387 c 0.46927,-0.494649 2.29022,-1.61009 4.04654,-2.478738 3.12794,-1.547039 3.21452,-1.561056 4.22962,-0.684727 1.1658,1.006428 0.97079,1.729835 -0.46635,1.729835 -0.52883,0 -2.69437,0.524921 -4.81228,1.1665 -3.49099,1.057516 -3.77105,1.082479 -2.99753,0.26713 z M 17.745827,48.282013 c 0,-0.488719 0.43602,-2.097507 0.96894,-3.57509 0.940622,-2.608013 1.223797,-4.075322 1.1082,-5.742285 -0.08977,-1.294467 -2.515805,-3.71272 -5.305196,-5.288166 -2.130699,-1.203418 -2.317515,-1.406824 -1.067011,-1.161784 4.812659,0.943079 12.003476,5.667201 15.282168,10.039863 l 1.63901,2.185884 -2.94637,-0.254864 c -3.743925,-0.323842 -6.136597,0.662446 -7.312233,3.01418 -0.888318,1.777002 -2.367508,2.265748 -2.367508,0.782262 z m 94.650513,-0.782262 c -1.17563,-2.351734 -3.5683,-3.338022 -7.31223,-3.01418 l -2.94637,0.254864 1.63901,-2.185884 c 3.2787,-4.372662 10.46951,-9.096784 15.28217,-10.039863 1.2505,-0.24504 1.06369,-0.04168 -1.067,1.161784 -2.78939,1.575446 -5.21544,3.993699 -5.30521,5.288166 -0.1156,1.666963 0.16758,3.134272 1.10821,5.742285 0.53291,1.477583 0.96894,3.086371 0.96894,3.57509 0,1.483486 -1.4792,0.99474 -2.36752,-0.782262 z m -47.077665,-2.04613 c -1.28294,-2.398917 -4.063708,-4.765793 -6.100532,-5.192551 -0.854386,-0.179008 -1.553438,-0.625456 -1.553438,-0.992119 0,-0.366655 -0.462354,-1.845467 -1.027453,-3.286246 -1.222007,-3.115618 -4.217289,-6.505319 -7.758713,-8.780367 -1.4133,-0.907922 -2.329722,-1.65077 -2.036475,-1.65077 1.668818,0 6.352545,1.769339 8.423624,3.182128 1.320746,0.900948 2.926537,1.63808 3.568417,1.63808 1.666655,0 3.22285,2.259703 3.506037,5.091016 0.130942,1.309166 1.110527,4.257234 2.176851,6.551254 l 1.938775,4.170938 0.831494,-2.242855 c 0.457328,-1.233577 1.321663,-3.156075 1.920754,-4.272242 0.621982,-1.158828 1.089241,-2.927945 1.089241,-4.124037 0,-2.801589 1.976677,-5.488881 3.864207,-5.253371 0.861158,0.107437 1.744291,-0.247793 2.631996,-1.058709 1.603741,-1.465 5.130111,-2.97768 7.90491,-3.390907 l 2.021212,-0.301002 -1.515902,0.790041 c -4.60863,2.401865 -8.286251,6.644481 -9.65613,11.139588 -0.633791,2.079704 -1.018989,2.595891 -2.127805,2.851365 -2.217284,0.510869 -4.075682,2.037706 -5.620218,4.617499 l -1.455344,2.430802 z m -13.717604,-5.09114 c -2.084361,-1.000349 -6.580334,-2.555176 -9.991037,-3.455184 -6.432663,-1.697413 -9.584058,-3.125325 -11.727415,-5.31374 -1.202921,-1.228205 -1.091031,-1.206374 2.761544,0.538911 3.528768,1.598594 4.570631,1.842158 8.598951,2.010221 3.851919,0.160708 4.697086,0.06089 5.293991,-0.625182 0.878215,-1.009438 0.113759,-2.422695 -1.310474,-2.422695 -1.000972,0 -5.919577,-3.134724 -5.518675,-3.517156 0.12785,-0.121958 1.321254,0.03327 2.651995,0.345019 3.175063,0.743724 7.160808,3.373029 9.180973,6.056447 1.756823,2.333611 4.284818,7.272732 4.016215,7.846765 -0.09146,0.195469 -1.87169,-0.463057 -3.956068,-1.463406 z m 25.784665,0.566362 c 1.621203,-5.392346 6.417955,-10.681654 11.251413,-12.406755 1.606385,-0.573344 3.417552,-1.042436 4.024794,-1.042436 1.076762,0 1.073166,0.01973 -0.14528,0.798289 -0.687148,0.439057 -1.780649,1.252469 -2.42999,1.807583 -0.649351,0.555106 -1.786278,1.009288 -2.526513,1.009288 -1.15856,0 -1.345879,0.201264 -1.345879,1.446062 v 1.446061 l 3.707571,0.142471 c 4.198298,0.161337 8.175634,-0.741999 11.704138,-2.658233 l 2.27387,-1.234868 -1.51591,1.547561 c -2.37897,2.42866 -4.048396,3.179066 -11.726384,5.270998 -6.833244,1.861777 -11.829725,3.807451 -12.522188,4.876249 -0.691354,1.067107 -1.176704,0.418209 -0.749642,-1.00227 z M 64.461148,39.330851 c -0.217236,-1.104566 -0.119501,-1.995142 0.267783,-2.440288 0.838092,-0.963307 -2.128581,-5.589841 -5.531245,-8.625993 -4.162813,-3.714422 -10.112707,-5.437887 -15.80816,-4.579026 -1.428808,0.215441 -2.682812,0.310657 -2.786681,0.211583 -0.476428,-0.454483 6.482372,-3.170201 8.850698,-3.454044 2.398538,-0.287463 2.652837,-0.228819 2.652837,0.611793 0,2.092783 2.545354,2.766184 4.563468,1.207313 0.969845,-0.749158 1.065887,-1.088 0.64894,-2.2896 -0.955664,-2.75413 -6.397822,-3.119736 -12.390535,-0.832407 -3.01219,1.149709 -2.797738,0.443371 0.455021,-1.498716 3.378592,-2.017219 9.690434,-4.447056 12.773467,-4.917335 2.651467,-0.404456 1.735468,-1.120318 -1.502646,-1.174337 -1.644496,-0.02743 -1.99414,-0.142101 -1.263252,-0.414283 0.555831,-0.206997 3.284464,-0.243374 6.063626,-0.08084 2.779163,0.162528 7.326886,0.164538 10.106049,0.0043 2.779162,-0.16008 5.507795,-0.1237 6.063625,0.08084 0.695439,0.255909 0.209556,0.381413 -1.558019,0.402438 -1.412738,0.01682 -2.723099,0.17792 -2.911911,0.358037 -0.188811,0.180111 1.486117,0.831296 3.722068,1.44708 5.159303,1.420866 13.737318,5.516979 13.008839,6.21189 -0.0974,0.09292 -1.645352,-0.273441 -3.439875,-0.814133 -6.534324,-1.968694 -11.094963,-1.128565 -11.094963,2.043942 0,2.536194 4.462189,3.336403 5.053748,0.906301 0.375677,-1.543211 1.732867,-1.734361 5.29686,-0.746016 2.493384,0.691453 6.590866,2.611376 6.219614,2.914281 -0.08134,0.06637 -1.351928,-0.03133 -2.823514,-0.21714 -8.191263,-1.034188 -15.607786,2.649906 -20.119789,9.994345 -1.168196,1.901509 -1.280767,2.405263 -0.805785,3.605646 0.684652,1.730287 -0.236295,4.372079 -1.044113,2.995092 -0.421608,-0.718637 -0.534074,-0.716761 -1.391392,0.02336 -0.887619,0.766273 -0.94925,0.721107 -1.274763,-0.934122 z M 68.93127,27.929489 c 3.244091,-6.058705 3.137254,-11.888636 -0.259458,-14.158172 -1.747354,-1.1675 -3.363278,-0.910031 -5.182945,0.825796 -2.278347,2.173375 -2.591913,4.410039 -1.293395,9.225849 1.115379,4.136622 3.274497,8.159319 4.224157,7.87013 0.326237,-0.09935 1.456479,-1.792965 2.511641,-3.763603 z m -5.347085,-2.931664 c -0.897454,-1.503918 -0.893562,-1.527421 0.75796,-4.574365 0.913023,-1.684476 1.773736,-3.06268 1.912698,-3.06268 0.138953,0 1.010872,1.398828 1.937597,3.108503 1.67745,3.094665 1.680906,3.115036 0.775335,4.577416 -1.104836,1.78417 -1.583511,1.847327 -2.000135,0.263863 -0.174377,-0.662782 -0.495142,-1.205056 -0.712797,-1.205056 -0.217663,0 -0.53842,0.542274 -0.712806,1.205056 -0.417767,1.587844 -0.866455,1.516175 -1.957852,-0.312737 z m -49.301591,3.70751 c -2.806833,-2.904753 -2.714811,-5.556393 0.297353,-8.568436 l 1.31755,-1.317497 0.91674,1.438003 c 0.892176,1.399477 1.022938,1.437998 4.880942,1.437998 3.1578,0 4.440945,-0.230228 6.307768,-1.131796 l 2.343561,-1.131797 1.019506,1.035216 c 0.937474,0.951912 0.954002,1.097702 0.20543,1.81179 -1.84,1.755224 -0.727416,4.06896 3.145442,6.541284 0.839526,0.535938 0.700416,0.577803 -1.054038,0.317206 -2.852155,-0.423634 -7.494543,-2.654561 -6.83438,-3.284311 0.284956,-0.271827 0.5181,-0.993119 0.5181,-1.602877 0,-1.018728 -0.219309,-1.108653 -2.703759,-1.108653 -3.360564,0 -5.727274,0.730849 -7.52861,2.324868 -1.468943,1.299876 -1.83917,3.319724 -0.791643,4.318985 0.328874,0.313719 0.475811,0.686896 0.326539,0.829305 -0.149277,0.142391 -1.2142,-0.716788 -2.366501,-1.909288 z m 101.958926,1.252603 c 1.87696,-3.345562 -1.15071,-6.116534 -7.27968,-6.662499 -2.83487,-0.252527 -3.31569,-0.17746 -3.61407,0.564247 -0.18928,0.470552 -0.0812,1.257151 0.24011,1.747994 0.51564,0.787618 0.29248,1.033491 -1.8997,2.093183 -1.36618,0.660392 -3.46915,1.34212 -4.673263,1.514943 l -2.189296,0.314223 1.722098,-1.145695 c 0.947155,-0.630129 2.194711,-1.75418 2.772361,-2.497907 1.01233,-1.30336 1.01865,-1.404763 0.17493,-2.807128 -0.6562,-1.090672 -0.74492,-1.68736 -0.35439,-2.383444 0.64067,-1.141959 0.696,-1.14223 3.23133,-0.01566 1.12993,0.502095 3.71752,1.047165 5.75019,1.211289 3.62652,0.292801 3.72474,0.270775 5.24086,-1.175508 1.49999,-1.43087 1.57484,-1.448643 2.56392,-0.608758 1.21484,1.031578 2.39526,3.533092 2.39526,5.075955 0,1.347865 -2.15657,4.483782 -3.58501,5.213038 -0.94165,0.480747 -0.98819,0.439607 -0.49565,-0.438288 z M 96.962523,22.503699 c 0.421555,-4.493569 3.299767,-10.613884 6.147547,-13.0723486 0.93658,-0.8085431 0.97806,-0.766139 1.30884,1.3380256 0.43397,2.760573 1.78068,4.177734 3.97003,4.177734 2.06584,0 3.3431,-1.251095 3.3431,-3.274638 0,-1.7259003 -1.40198,-2.7349158 -3.31528,-2.3860174 -1.14495,0.2087856 -1.15829,0.1737738 -0.43922,-1.1526811 1.12038,-2.0667608 3.64473,-4.6368057 6.20454,-6.3168598 l 2.29328,-1.5051254 -1.10841,1.7108118 c -2.22533,3.434777 -1.24079,9.7481519 2.22203,14.2487889 l 0.83347,1.083265 -2.34601,-0.306739 c -2.26169,-0.295718 -2.41845,-0.234111 -4.36093,1.713783 -1.93694,1.942327 -3.01529,2.205599 -3.01529,0.736161 0,-1.158793 -1.93257,-2.622666 -3.46238,-2.622666 -2.18059,0 -4.55093,1.838799 -6.634189,5.146485 l -1.875224,2.977385 z M 34.003786,22.011405 c -1.994453,-3.371147 -4.208708,-5.136212 -6.443337,-5.136212 -1.80164,0 -3.750996,1.356883 -3.750996,2.610948 0,1.33857 -1.281768,1.06647 -2.414262,-0.512507 -1.298765,-1.810804 -2.809087,-2.332887 -5.684474,-1.964989 l -1.974068,0.252579 1.476477,-1.759582 c 2.254718,-2.68706 3.085148,-5.063673 3.097746,-8.8654784 0.0091,-2.7452487 -0.200724,-3.6846691 -1.07485,-4.8125166 L 16.149874,0.42223776 17.760211,1.2166077 c 1.972086,0.9728206 5.474958,4.3156214 6.70944,6.4028431 l 0.912844,1.5434081 h -1.696063 c -2.067103,0 -2.90879,0.7252832 -2.90879,2.5065081 0,1.733984 1.624435,3.277743 3.449037,3.277743 2.028133,0 3.55096,-1.758909 3.954524,-4.567586 l 0.336789,-2.343928 1.219369,1.4071664 c 2.085968,2.4072306 3.475145,4.6791666 4.544567,7.4324306 1.004738,2.586736 2.000159,7.712334 1.497782,7.712334 -0.138508,0 -0.937673,-1.159254 -1.775924,-2.576122 z m 2.038563,-5.979748 C 35.733576,15.037488 35.376594,13.294093 35.249068,12.157441 34.878338,8.8531898 33.045911,7.0699468 27.187309,4.3120738 22.764428,2.2300537 22.32506,1.9229094 24.062108,2.1274268 c 1.11166,0.1308813 3.347454,0.3753304 4.96842,0.5432221 3.819173,0.3955665 7.962888,1.7724345 11.084027,3.682987 l 2.490874,1.5247429 -1.643673,0.5217358 c -2.105385,0.6682902 -2.934405,1.8500444 -2.02839,2.8914354 0.538817,0.619314 1.868742,0.769593 7.044928,0.796058 6.75541,0.03456 6.78057,0.118259 0.569759,1.896039 -2.08437,0.596627 -5.090752,1.708209 -6.680842,2.470183 -1.590096,0.761973 -2.97486,1.385406 -3.07726,1.385406 -0.102406,0 -0.438819,-0.813411 -0.747602,-1.807579 z M 93.14684,16.37071 c -1.745417,-0.757586 -4.815123,-1.851123 -6.821576,-2.430084 -2.006454,-0.578954 -3.989179,-1.185844 -4.406056,-1.348641 -0.416878,-0.162793 1.743296,-0.349479 4.800374,-0.414857 6.768349,-0.144746 7.832186,-0.350985 7.832186,-1.51837 0,-1.088374 -0.988915,-1.9268445 -2.825041,-2.3952783 -1.371372,-0.3498654 -1.3694,-0.3531334 1.145409,-1.8925297 3.147613,-1.9267534 7.282504,-3.3036329 11.112314,-3.7003011 1.62098,-0.1678917 3.85676,-0.4123408 4.96843,-0.5432221 1.73705,-0.2045174 1.29767,0.1026269 -3.1252,2.184647 -6.314889,2.9726633 -7.655141,4.4177468 -8.235172,8.8792642 -0.616091,4.738914 -0.705431,4.802803 -4.445668,3.179372 z"
       id="path12760"
 />
  </g>
</svg>
    </div>
  )
}

export default Logo