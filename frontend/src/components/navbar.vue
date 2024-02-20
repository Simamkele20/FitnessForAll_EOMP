<template>
    <nav class="navbar  navbar-expand-lg navbar-dark bg-black bg-gradient sticky-top" id="Shift">
        <div class="container-fluid">
            <route-link to="/" class="nav-link">
<img src="https://lh3.googleusercontent.com/fife/AGXqzDl-jqJetVRPfI-pyTKxkd64Ffm5hB8b-Gcr73NQ_FUusUViXTnQjGhWtW0C0LsORFKmxEbxGfESE3MYJN8MJqau7tcEnu-ZswBaby3waeB3A0ENq0dlw40uz8wddyL2lgYTMDNNiiSQ19eglAMBobORyOU6cf56xh6J0_JjsWuvCWzGM2n59nfChjxbC1YwWaFSs5ewVRXWrJ6w_94zK-l1y7TOEBATvGfmW3Sg7Az55uR6VyJGNrkyVwH2mGIK-JIOg53Hs2Sqw-f--JoE1_3w69C-6rFK6Lkv64--K2aZINey_ZmEd5ZX752QE7s4ujksd5zC4IVoJ8pHLDbH71UZgU1qWvkGKlCDGN4pX1b22f6MOMEOefYNDCmA3JeXfK6ub6goBJVfAfBryZNoIXum4Pis3FgGACtKA0aiTHl-MqsgRCov_NpCWnzur0Ie3_qJBFjsxvDVOjlFuBuisAeh16UUBb197-bXm0fhuZHfo0gi1mQeZ227l4kcRMoUJut9rNMVQqYecfolKjQEP18xphMo886GAEV_hJZXgmYFszTd-B7hklv2Ypkp6Iu-as1E3LCWD7r8lYjq9PF-iQRxGNJtIVIYC3cbYYkWR3UlRvRLPlU1Ix3h3YlUns85pW_dkiTkN3FOvDJuaveIuCKhlrPsREQonMjnfnYcPdzOrpJNBP_CPaIjcpRg5N0ZwAL5fzG2I4KhSMxsoM1CL2oxqJveyWRK85m0Iiof-L_P_pVKyLRoJiQrkA2g95Jv71uy0XEjaPGw6HvDKoe5XaNTl3MzwJWXsWm5dHkXjE5fFb9HouXr-ebLP1cwBw_VrrnyfSJjFitVhKrMoz2ztSFyH4mRosesQOMB1-eQlT6cAQgKygPF0J5iXXZ-oUsU2B-mfHLtVaLeyWmfRmrpiFSK4ZVGaPgP9I5YP1yg4aWeb370cbzM1DnLSx9rRrlfCiDo0KB50IiAx0m0PV2z6vxqz3eDemhSlM-c4_OD3O1kvhSl1jLpeZ6pfqkA_F_gjPYsf-25CWvxEFS9nq7hsUJDocIDx35CyZE8DlsPxx9J0KdoIjyy8a3JY_3fr6OwRrIMjEtr8MUC1TMnYmjzP8udc7otcozYM7wnvcRjrjtwbk-DkcANz8WYTrsqErrZMn_ytoge2n9FDe1Thb9yTzhCtPPvgsX_maGTmcwKLhVGT4b5zyk8MmIlEr_OGPKQ0vJC1pQBSZC0LlHEDAaP01B0gckRUwKyIOB8OMyll9F8_AFlVjXS2-cPw7Df3XYKBLZdL64c9zYmBD7okbyCikGuTtbjyt61zeemZPs1V8brxsC1Qt4YSAhJ5Vb8crrxfAD6xlyZn6rMW57ZiYg_IXTI4K1WeB6GRH-cgF-Qrpcf2mkArkVHmHPKfOswTa1kB6tQ-KxsYR1RRD_PQ1-hnsxlx9IdbCw72HdLUB6-rFcOGU-B4wzfXmnsvVc1H1852u2-eW19ScCe3hEjOd5F89n4EZJ7Wja2EgPJNcu1ew9gqBci_EPcx_2vyUsorvLvh8AnEaszYw=w554-h414-p-k-nu" alt="Logo" class="w-25">         </route-link>
            <button class="navbar-toggler mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-center  " id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto text-center mb-lg-0 mx-end">
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

<style scoped>
</style>