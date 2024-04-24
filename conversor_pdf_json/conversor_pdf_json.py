from urllib.request import Request, urlopen
from PyPDF2 import PdfFileReader
import io

# Url aleatória somente para teste
url = ''

# Chamando funções para extrair o pdf
remote_file = urlopen(Request(url)).read()
memory_file = io.BytesIO(remote_file)
pdf = PdfFileReader(memory_file)

# Gerando arquivo .json sem baixa o pdf no seu computador
with open('amem2.json', 'w', encoding="utf-8") as d:
    for page_num in range(pdf.numPages):
        print('page: {0}'.format(page_num+1))
        pageObj = pdf.getPage(page_num)

        try:
            json = pageObj.extractText()
            print(''.center(100,'-'))
        except:
            pass
        else:
            d.write('page{0}\n0'.format(page_num+1))
            d.write(''.center(100, '-'))
            d.write(json)
    d.close()