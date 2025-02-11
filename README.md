# DateFnsHelper

A classe `DateFnsHelper` foi criada para padronizar a manipulação de datas dentro do projeto, evitando redundâncias e garantindo consistência na formatação e conversão de datas. Utilizar essa classe ajuda a manter um código mais limpo, reutilizável e reduz a possibilidade de erros ao trabalhar com datas em diferentes partes da aplicação.

Seguir esse padrão é essencial para garantir manutenção facilitada e uma melhor experiência do usuário, pois todas as datas serão tratadas de maneira uniforme, respeitando as configurações de localização e evitando inconsistências no formato de apresentação.

## Visão Geral

A classe `DateFnsHelper` fornece métodos utilitários para manipulação de datas usando a biblioteca `date-fns`. Ela inclui funcionalidades como formatação de data, cálculo de distância entre datas, conversão de strings para datas e adição de intervalos de tempo.

---

## Constantes

### `DEFAULT_FORMAT`

- **Tipo:** `string`
- **Valor:** `"d 'de' MMMM 'de' yyyy"`
- **Descrição:** Define o formato padrão usado na formatação de datas.

---

## Métodos Estáticos

### `formatDistance(date: Date, baseDate?: Date): string`

- **Parâmetros:**
  - `date`: `Date` - Data a ser comparada.
  - `baseDate` *(opcional)*: `Date` - Data base para comparação (padrão: data atual).
- **Retorno:** `string` - Distância de tempo formatada em relação à data base.
- **Exemplo:**

  ```typescript
  DateFnsHelper.formatDistance(new Date('2023-01-01'));
  // Retorno: "há x meses"
  ```

---

### `parseISO(argument: string): Date | null`

- **Parâmetros:**
  - `argument`: `string` - String representando uma data em formato ISO.
- **Retorno:** `Date | null` - Objeto `Date` convertido ou `null` em caso de erro.
- **Exemplo:**

  ```typescript
  DateFnsHelper.parseISO("2023-05-15T12:00:00Z");
  // Retorno: Date object correspondente
  ```

---

### `toDate(argument: string | number | Date): Date | string`

- **Parâmetros:**
  - `argument`: `string | number | Date` - Valor a ser convertido em `Date`.
- **Retorno:** `Date | string` - Objeto `Date` convertido ou string vazia em caso de erro.
- **Exemplo:**

  ```typescript
  DateFnsHelper.toDate("2023-05-15");
  // Retorno: Date object correspondente
  ```

---

### `format(date: Date | string | number, formatStr?: string): string`

- **Parâmetros:**
  - `date`: `Date | string | number` - Data a ser formatada.
  - `formatStr` *(opcional)*: `string` - Formato desejado (padrão: `DEFAULT_FORMAT`).
- **Retorno:** `string` - Data formatada.
- **Exemplo:**

  ```typescript
  DateFnsHelper.format(new Date(), "dd/MM/yyyy");
  // Retorno: "15/05/2023"
  ```

---

### `addTime(date: Date, amount: number, unit: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'): Date`

- **Parâmetros:**
  - `date`: `Date` - Data de referência.
  - `amount`: `number` - Quantidade a ser adicionada.
  - `unit`: `string` - Unidade de tempo (`'seconds'`, `'minutes'`, `'hours'`, `'days'`, `'weeks'`, `'months'`, `'years'`).
- **Retorno:** `Date` - Nova data ajustada.
- **Exemplo:**

  ```typescript
  DateFnsHelper.addTime(new Date(), 5, 'days');
  // Retorno: Data 5 dias no futuro
  ```

---

### `getMonthNamesFromMonthNumber(number: number): string`

- **Parâmetros:**
  - `number`: `number` - Índice do mês (0 a 11).
- **Retorno:** `string` - Nome do mês correspondente, capitalizado.
- **Exemplo:**

  ```typescript
  DateFnsHelper.getMonthNamesFromMonthNumber(0);
  // Retorno: "Janeiro"
  ```

---

## Tratamento de Erros

A classe trata erros nos seguintes casos:

- **`parseISO` e `toDate`**: Se falharem, retornam `null` ou string vazia e registram o erro no console.
- **`format`**: Se a data for inválida, retorna "Data inválida".
- **`getMonthNamesFromMonthNumber`**: Se o índice estiver fora do intervalo 0-11, retorna "Mês desconhecido" e gera um aviso no console.

---

## Conclusão

A `DateFnsHelper` simplifica a manipulação de datas em aplicações TypeScript, fornecendo métodos seguros e localizados para o idioma português do Brasil.
