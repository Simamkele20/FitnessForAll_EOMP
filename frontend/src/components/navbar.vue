<template>
    <nav class="navbar  navbar-expand-lg navbar-dark bg-black bg-gradient sticky-top" id="Shift">
        <div class="container-fluid">
            <route-link to="/" class="nav-link">
             <img src="https://lh3.googleusercontent.com/fife/AGXqzDmNt4lydKZAIeyIx8Ka-NP6o1drMk1rAZnZBzylKKp84KKIwuS9wvQt_axxwRH0IiLx-KAEUR50fuK46Nggx3kb6_DHPTJDBAVVM3Xb5LeWgXyosg0Zj8j5hk8JbCGHJCB-ZbCJKT0whILL9zX-566rYAJ3Yo1V6Uwjcj0z6iYxeL5qdJ-xWrDqTI9MXOcZh7tCW0eRnLbEct1v3EOhFidZHW3JuaZ_jZfCJTvvFih-qFtjsusLE6eAgDwL5dP5Z2xi_bxYXNNgyoDYz2_A0x-1ZZHhs4S29sBU18jPTNiPopjKv81y9Q_L1sfuHXzltbur4f26NgxTAPNIKUrWftpm-66QDCMPgpFI3oKTOumtxL4l2SVGMs94Q20G9G2X09ntPrPfop1LjPlENqdUNZenM5-x3CEUI9SLesVnjxWrdkbD5IPkLEevY0Sbec4ql4zt_KrH90wNzvaFrKUa85BjgqA81R6DoSokMYSWC5Z5-6j_rxwcAYhheEzNVAUb4xi_KP3zMPYwbS0Z3DIi4cYCrOxlY9JOV2GSwP7cBUiQPFSOzik8maB4DZsRUoe1nH57vcEEPU9yz7z2TGYX2e0ViFJNGJFiqbeikUI3_YwXh2udPIH6ay2ML6rE6ptpLCi3BGEi0X9-Yp0qEGy3snHpnyZVKANwVvpachUYWQDCPiPhMpEwZZ408o3MUldzpGCjGrfjbHWpzQgiNLDTI0K3F53LKTAUd9hyTftLpz1nFyb47k8fg4CZLKyeVI1Ar-sQ01-lFh8UxWsXx1LPWVNdgBwxx0dHcgDQ8YbItpYhuyskzcIdeepnMsipdW5H-UswqwpBWuZzVnWYGv4NWGe31WEpb1GR8I4FMGNbRJRHmImiHeclmi2NcJGp41axPF9VFpL8ul_3nmAUNEG0ul5pxElgcu7t8UWO4tARFGZdhDKX7jpGTKE0gCg6iTA2nu4agyjq17KEs_RsSkpx2ARgc6xS4uUQs341aeS9XraAM-_elLjwpgBsHFpGOA-pGVmzJdhh1sM0f58hpL5CZuMssvLzLfqPPKmKAWqaCeoBArckJmgrlZwrm0zJD_buRxia3PliCznjcKpNTwGL8c-_Gejow_EnKggg2SkVRfCxkEcr6N-YIHtNa_70u8rEAF8STUieSjzKeRjMNjlOBTT4wKYbr8fNuVliRD6z229Kr308UixHlOP_hlU6ehhvAAisRcASB2CZJ7yG6W86DiBVFA2u6BjPP3UiWk8EZj1XzXBRdTBj8okL_3RTr3LRHtuvM3H4a54Yu4u1vdWu73kt0ER1AkXjWf5-eMsy8PIT9R8k7kqsGBDxGZoHslqbbNhWbIdbGLhiSxaA7AnfHFwXNtWXVbToOo8FtABwl3RkDzjibwma17S8MlF2Z3yK8_RN_FFP0GcO2LcyS1cVVuy4SjEHZROS0FcW9yDc-zOvfymylaespw3dbPS4bvWm2eB9mbSfQ8oyU2yGZQOpDUI3-mIBLvcU5pleqEPajIdNOeSoiQibXdQirHbLTUOt51niHyk5xVc=w554-h414-p-k-nu"    class="img-fluid w-50 img-thumbnail " loading="lazy" alt="Logo" id="Navimg">   
            </route-link>
            <button class="navbar-toggler  mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  " id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto  mb-lg-0 mx-end">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home  |</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">About      |</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/resume" class="nav-link">Products |</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/project" class="nav-link">Admin |</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name : 'navBarComp',
}
</script>

<style scoped></style>