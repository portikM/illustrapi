/* eslint-disable indent */
import Vue from 'vue'
import ComCta from '~/components/ComComponents/ComButtons/ComCta.vue'
import ComInput from '~/components/ComComponents/ComInput.vue'
import ComCtaLabel from '~/components/ComComponents/ComCtaLabel.vue'
import ComDropdown from '~/components/ComComponents/ComDropdown.vue'

const components = { ComCta, ComInput, ComCtaLabel, ComDropdown }

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})