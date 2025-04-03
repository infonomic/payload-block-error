import type { Field, GroupField } from 'payload'

import { payloadLocalization } from 'payload-localization'
import deepMerge from '../../utilities/deepMerge'

function availableTranslations(): Field[] {
  const fields: Field[] = []
  const locales = payloadLocalization?.locales
  if (locales.length > 0) {
    for (const locale of locales) {
      fields.push({
        name: locale.code,
        type: 'checkbox',
        label: locale.label.en
        // defaultValue: locale.code === localizationConfig.defaultLocale,
        // admin: {
        //   disabled: locale.code === localizationConfig.defaultLocale
        // }
      })
    }
  }
  return fields
}

type AvailableTranslationsType = (options?: { overrides?: Partial<GroupField> }) => Field

export const availableTranslationsField: AvailableTranslationsType = ({ overrides = {} } = {}) => {
  const result: Field = {
    name: 'availableTranslations',
    type: 'group',
    validate: (val) => {
      // @ts-ignore
      const values = Object.values(val)
      if (values.includes(true)) {
        return true
      } else {
        return 'Please choose at least one available language.'
      }
    },
    admin: {
      hideGutter: true,
      position: 'sidebar',
      className: 'available-translations',
      ...(overrides?.admin != null ? overrides.admin : {})
    },
    fields: availableTranslations()
  }

  return deepMerge(result, overrides)
}
