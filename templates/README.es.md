# Los Usuarios de GitHub Más Activos de {{COUNTRY_NAME}} [<img alt="Image of insights" src="https://github.com/gayanvoice/insights/blob/master/graph/373383893/small/week.png" height="24">](https://github.com/gayanvoice/insights/blob/master/readme/373383893/week.md)
[![Top GitHub Users](https://github.com/gayanvoice/top-github-users/actions/workflows/action.yml/badge.svg)](https://github.com/gayanvoice/top-github-users/actions/workflows/action.yml) [![Image of insights](https://github.com/gayanvoice/insights/blob/master/svg/373383893/badge.svg)](https://github.com/gayanvoice/insights/blob/master/readme/373383893/week.md)

Lista de los usuarios de GitHub más activos según sus `contribuciones públicas`, `contribuciones privadas` y `número de seguidores`, organizados por ciudad.

La lista se actualizó el `{{DATE}}`.

Este repositorio contiene datos de **{{NUMBER_OF_CITIES}} ciudades**.

Para aparecer en la lista se necesita un número mínimo de seguidores, que varía según la ciudad. Ese mínimo se puede consultar en [config.json](https://github.com/{{REPOSITORY}}/blob/main/config.json).

Este proyecto está basado en la acción de GitHub [gayanvoice/top-github-users-action](https://github.com/gayanvoice/top-github-users-action).

---

⭐ Si te gusta este repositorio, no olvides darle una estrella.

---

<table>
	<tr>
		<th>
			Categoría
		</th>
		<th>
			País/Estado
		</th>
		<th>
			Ciudades
		</th>
	</tr>
	<tr>
		<td>
			Contribuciones Públicas
		</td>
		<td>
			<a href="https://github.com/{{REPOSITORY}}/blob/main/markdown/public_contributions/{{COUNTRY_FILE}}.md">
				{{COUNTRY_NAME}}
			</a>
		</td>
		<td>
{{CITIES}}
		</td>
	</tr>
	<tr>
		<td>
			Contribuciones Totales
		</td>
		<td>
			<a href="https://github.com/{{REPOSITORY}}/blob/main/markdown/total_contributions/{{COUNTRY_FILE}}.md">
				{{COUNTRY_NAME}}
			</a>
		</td>
		<td>
{{CITIES}}
		</td>
	</tr>
	<tr>
		<td>
			Seguidores
		</td>
		<td>
			<a href="https://github.com/{{REPOSITORY}}/blob/main/markdown/followers/{{COUNTRY_FILE}}.md">
				{{COUNTRY_NAME}}
			</a>
		</td>
		<td>
{{CITIES}}
		</td>
	</tr>
</table>

---

## 📦 Librerías utilizadas

- [@octokit/graphql](https://www.npmjs.com/package/@octokit/graphql) — Para enviar solicitudes GraphQL a la API de GitHub.
- [fs-extra](https://www.npmjs.com/package/fs-extra) — Para crear directorios y archivos.
- [simple-git](https://www.npmjs.com/package/simple-git) — Para manejar comandos de Git.

## 📄 Licencia

- Acción de GitHub — [{{REPOSITORY}}-action](https://github.com/{{REPOSITORY}}-action)
- Repositorio — [{{REPOSITORY}}](https://github.com/{{REPOSITORY}})
- Datos en el directorio `./cache` — [Open Database License](https://opendatacommons.org/licenses/odbl/1-0/)
- Código — [MIT](./LICENSE) © [Gayan Kuruppu](https://github.com/gayanvoice)
